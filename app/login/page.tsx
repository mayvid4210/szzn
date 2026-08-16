"use client";

import { FormEvent, useState } from "react";

export default function LoginPage() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [unlocking, setUnlocking] = useState(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setError("");
    setLoading(true);

    try {
      const response = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ password }),
      });

      if (response.ok) {
        setUnlocking(true);

        setTimeout(() => {
          window.location.href = "/";
        }, 900);

        return;
      }

      setError("oops");
      setPassword("");
    } catch {
      setError("haw");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className={`lockscreen ${unlocking ? "unlocking" : ""}`}>
      <picture className="lockscreen-image">
        <source
          media="(max-width: 700px)"
          srcSet="/images/lockscreen-mobile.png"
        />

        <img
          src="/images/lockscreen-desktop.png"
          alt=""
        />
      </picture>

      <div className="password-note">
        <p className="password-question">
          what's the magic word?
        </p>

        <form onSubmit={handleSubmit}>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="type crow."
            autoComplete="off"
            autoFocus
            disabled={unlocking}
          />

          <button type="submit" disabled={loading || unlocking}>
            {unlocking ? "♡" : loading ? "..." : "open ♡"}
          </button>
        </form>

        {error && (
          <p className="password-error">
            {error}
          </p>
        )}
      </div>
    </main>
  );
}