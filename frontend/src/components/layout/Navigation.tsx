import { NavLink } from "react-router-dom";

const menu = [
  { to: "/", label: "Home" },
  { to: "/events", label: "Events" },
  { to: "/admin", label: "Admin" },
  { to: "/login", label: "Login" },
];

function Navigation() {
  return (
    <nav>
      {menu.map((item) => (
        <NavLink key={item.to} to={item.to} end={item.to === "/"}>
          {item.label}
        </NavLink>
      ))}
    </nav>
  );
}
export default Navigation;