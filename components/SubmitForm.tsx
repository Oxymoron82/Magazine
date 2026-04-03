"use client";

import { useState } from "react";

export default function SubmitForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    title: "",
    message: "",
  });

  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        setStatus("error");
        setErrorMessage(data.error || "Something went wrong.");
        return;
      }

      setStatus("success");
      setForm({
        name: "",
        email: "",
        title: "",
        message: "",
      });
    } catch {
      setStatus("error");
      setErrorMessage("Something went wrong. Please try again.");
    }
  }

  return (
    <section className="mt-20 md:mt-24">
      <div className="max-w-3xl mx-auto px-6">
        <div className="rounded-2xl border border-neutral-200 bg-white/50 p-8 md:p-12">
          <p className="text-xs uppercase tracking-[0.35em] text-neutral-600">
            Editorial
          </p>

          <h2 className="mt-4 font-serif text-3xl md:text-4xl leading-tight text-neutral-900">
            Submit your story
          </h2>

          <p className="mt-4 text-neutral-700 max-w-2xl leading-relaxed">
            Send us your pitch, article idea, or visual story. We are always open
            to new voices and personal perspectives.
          </p>

          <form onSubmit={handleSubmit} className="mt-8 grid gap-4">
            <input
              type="text"
              placeholder="Your name"
              value={form.name}
              onChange={(e) =>
                setForm((prev) => ({ ...prev, name: e.target.value }))
              }
              className="w-full rounded-xl border border-neutral-300 bg-white px-4 py-3 text-sm outline-none focus:border-black"
            />

            <input
              type="email"
              placeholder="Your email"
              value={form.email}
              onChange={(e) =>
                setForm((prev) => ({ ...prev, email: e.target.value }))
              }
              className="w-full rounded-xl border border-neutral-300 bg-white px-4 py-3 text-sm outline-none focus:border-black"
            />

            <input
              type="text"
              placeholder="Title or subject"
              value={form.title}
              onChange={(e) =>
                setForm((prev) => ({ ...prev, title: e.target.value }))
              }
              className="w-full rounded-xl border border-neutral-300 bg-white px-4 py-3 text-sm outline-none focus:border-black"
            />

            <textarea
              placeholder="Tell us about your story"
              value={form.message}
              onChange={(e) =>
                setForm((prev) => ({ ...prev, message: e.target.value }))
              }
              rows={7}
              className="w-full rounded-xl border border-neutral-300 bg-white px-4 py-3 text-sm outline-none focus:border-black resize-none"
            />

            <div className="flex flex-col gap-3 pt-2 md:flex-row md:items-center md:justify-between">
              <button
                type="submit"
                disabled={status === "loading"}
                className="inline-flex items-center justify-center rounded-full border border-neutral-900 px-6 py-3 text-sm tracking-wide transition hover:bg-black hover:text-white disabled:opacity-50"
              >
                {status === "loading" ? "Sending..." : "Send submission"}
              </button>

              {status === "success" ? (
                <p className="text-sm text-green-700">
                  Your message has been sent.
                </p>
              ) : null}

              {status === "error" ? (
                <p className="text-sm text-red-600">{errorMessage}</p>
              ) : null}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}