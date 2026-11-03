import { useState, type FormEvent } from "react";
import { Link } from "react-router-dom";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState<{ email?: string; password?: string }>({});
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const found: { email?: string; password?: string } = {};
    if (!email.includes("@")) found.email = "Enter a valid email address.";
    if (password.length < 6) found.password = "Password must be at least 6 characters.";
    setErrors(found);
    setSent(Object.keys(found).length === 0);
  }

  return (
    <section>
      <h2>Log In</h2>
      {sent && <p className="message success">Real login comes in Sprint 10.</p>}
      <form onSubmit={handleSubmit} noValidate>
        <div>
          <label htmlFor="email">Email</label>
          <input id="email" type="email" value={email}
            onChange={(e) => setEmail(e.target.value)}
            aria-invalid={errors.email ? true : undefined} />
          {errors.email && <span className="error-text">{errors.email}</span>}
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input id="password" type="password" value={password}
            onChange={(e) => setPassword(e.target.value)}
            aria-invalid={errors.password ? true : undefined} />
          {errors.password && <span className="error-text">{errors.password}</span>}
        </div>
        <button type="submit">Log in</button>
      </form>
      <div className="links">
        <Link to="/forgot-password">Forgot password</Link>
        <Link to="/register">No account? Register</Link>
      </div>
    </section>
  );
}
export default LoginPage;