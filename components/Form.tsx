"use client";

import { useState } from "react";
import config from "@/config/general";

const findRequestURL = (mail: string) => {
  const formURL = config.subscribeForm.split("/");
  const getNumbers = formURL.filter((item) => Number(item) && item);
  const accountID = getNumbers[0];
  const formID = getNumbers[1];
  return `https://assets.mailerlite.com/jsonp/${accountID}/forms/${formID}/subscribe?fields[email]=${encodeURIComponent(
    mail
  )}`;
};

type Status = "idle" | "loading" | "success" | "error";

interface FormProps {
  note?: string;
  className?: string;
}

const Form: React.FC<FormProps> = ({ note, className = "" }) => {
  const [mail, setMail] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!mail) return;
    setStatus("loading");
    setMessage("");
    fetch(findRequestURL(mail), { method: "POST" })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setStatus("success");
          setMessage("You're on the list — welcome. We'll be in touch soon. 🌿");
          setMail("");
        } else {
          setStatus("error");
          setMessage("Something went wrong. Please try again.");
        }
      })
      .catch(() => {
        setStatus("error");
        setMessage("Something went wrong. Please try again.");
      });
  };

  const isSuccess = status === "success";

  return (
    <div className={className}>
      <form onSubmit={onSubmit} noValidate>
        <div className="flex flex-col gap-2 rounded-lg border border-sand bg-white p-2 shadow-soft sm:flex-row sm:items-center sm:rounded-pill">
          <label htmlFor="email" className="sr-only">
            Email address
          </label>
          <input
            type="email"
            name="fields[email]"
            autoComplete="email"
            required
            id="email"
            placeholder="Enter your email"
            className="w-full flex-1 rounded-pill bg-transparent px-5 py-3.5 text-base text-ink placeholder-inkMuted focus:outline-none"
            value={mail}
            onChange={(e) => setMail(e.target.value)}
            disabled={isSuccess}
          />
          <button
            type="submit"
            className="btn-primary w-full shrink-0 sm:w-auto"
            disabled={mail === "" || status === "loading" || isSuccess}
          >
            {status === "loading" ? "Joining…" : isSuccess ? "You're in ✓" : "Join the waitlist"}
          </button>
        </div>
      </form>

      {message ? (
        <p
          role="status"
          aria-live="polite"
          className={`mt-3 px-1 text-sm font-medium ${
            status === "error" ? "text-[#9e2515]" : "text-forest"
          }`}
        >
          {message}
        </p>
      ) : note ? (
        <p className="mt-3 px-1 text-sm text-inkMuted">{note}</p>
      ) : null}
    </div>
  );
};

export default Form;
