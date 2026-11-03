import { useState, type FormEvent } from "react";
import { Link } from "react-router-dom";

function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const found = email.includes("@") ? "" : "Enter a valid email address.";
    setError(found);
    setSent(found === "");
  }

  return (
    <section>
      <h2>Forgot Password</h2>
      <p>Enter your registered email address and we will send you a reset link.</p>
      {sent && <p className="message success">Link sent to {email} (demo).</p>}
      <form onSubmit={handleSubmit} noValidate>
        <div>
          <label htmlFor="email">Email</label>
          <input id="email" type="email" value={email}
            onChange={(e) => setEmail(e.target.value)}
            aria-invalid={error ? true : undefined} />
          {error && <span className="error-text">{error}</span>}
        </div>
        <button type="submit">Send link</button>
      </form>
      <div className="links">
        <Link to="/login">← Back to login</Link>
      </div>
    </section>
  );
}
export default ForgotPasswordPage;