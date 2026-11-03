import { useState, type FormEvent } from "react";
import { Link } from "react-router-dom";

interface RegisterErrors {
  name?: string; email?: string; password?: string; password2?: string;
}

function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [errors, setErrors] = useState<RegisterErrors>({});
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const found: RegisterErrors = {};
    if (name.trim().length < 3) found.name = "Name must be at least 3 characters.";
    if (!email.includes("@")) found.email = "Enter a valid email address.";
    if (password.length < 6) found.password = "Password must be at least 6 characters.";
    if (password2 !== password) found.password2 = "Passwords do not match.";
    setErrors(found);
    setSent(Object.keys(found).length === 0);
  }

  return (
    <section>
      <h2>Register</h2>
      {sent && <p className="message success">Real registration comes in Sprint 10.</p>}
      <form onSubmit={handleSubmit} noValidate>
        <div>
          <label htmlFor="name">Full Name</label>
          <input id="name" value={name} onChange={(e) => setName(e.target.value)}
            aria-invalid={errors.name ? true : undefined} />
          {errors.name && <span className="error-text">{errors.name}</span>}
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)}
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
        <div>
          <label htmlFor="password2">Confirm Password</label>
          <input id="password2" type="password" value={password2}
            onChange={(e) => setPassword2(e.target.value)}
            aria-invalid={errors.password2 ? true : undefined} />
          {errors.password2 && <span className="error-text">{errors.password2}</span>}
        </div>
        <button type="submit">Register</button>
      </form>
      <div className="links">
        <Link to="/login">Already have an account? Log in</Link>
      </div>
    </section>
  );
}
export default RegisterPage;