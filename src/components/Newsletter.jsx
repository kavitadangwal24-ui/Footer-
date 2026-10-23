
import { useState } from "react";
import {
  ArrowRight,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";
import footerConfig from "../data/footerConfig";

function Newsletter() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle");
  const [message, setMessage] = useState("");

  const { newsletter } = footerConfig;

  const handleSubmit = (event) => {
    event.preventDefault();

    const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!validEmail.test(email.trim())) {
      setStatus("error");
      setMessage(newsletter.errorMessage);
      return;
    }

    setStatus("loading");
    setMessage("");

    // Demo subscription: no backend is connected yet.
    window.setTimeout(() => {
      setStatus("success");
      setMessage(newsletter.successMessage);
      setEmail("");
    }, 1000);
  };

  return (
    <section
      className="footer-newsletter"
      aria-labelledby="newsletter-title"
    >
      <h3 id="newsletter-title">{newsletter.title}</h3>

      <p>{newsletter.description}</p>

      <form
        className="newsletter-form"
        onSubmit={handleSubmit}
        noValidate
      >
        <label className="sr-only" htmlFor="newsletter-email">
          {newsletter.emailLabel}
        </label>

        <input
          id="newsletter-email"
          type="email"
          name="email"
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
            setStatus("idle");
            setMessage("");
          }}
          placeholder={newsletter.placeholder}
          autoComplete="email"
          aria-invalid={status === "error"}
          aria-describedby={
            message ? "newsletter-message" : undefined
          }
          disabled={status === "loading"}
          required
        />

        <button
          type="submit"
          disabled={status === "loading"}
        >
          {status === "loading" ? (
            newsletter.loadingText
          ) : (
            <>
              {newsletter.buttonText}
              <ArrowRight size={17} aria-hidden="true" />
            </>
          )}
        </button>
      </form>

      {message && (
        <p
          id="newsletter-message"
          className={`newsletter-message ${status}`}
          role="status"
          aria-live="polite"
        >
          {status === "success" && (
            <CheckCircle2 size={17} aria-hidden="true" />
          )}

          {status === "error" && (
            <AlertCircle size={17} aria-hidden="true" />
          )}

          {message}
        </p>
      )}
    </section>
  );
}

export default Newsletter;
