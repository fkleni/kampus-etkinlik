import type { PageName } from "../../types/page";

interface NavigationProps {
  current: PageName;
  onNavigate: (page: PageName) => void;
}

const menuItems: { name: PageName; label: string }[] = [
  { name: "home", label: "Home" },
  { name: "events", label: "Events" },
  { name: "add", label: "Add" },
];

function Navigation({ current, onNavigate }: NavigationProps) {
  return (
    <nav>
      {menuItems.map((item) => (
        <a
          key={item.name}
          href="#"
          aria-current={current === item.name ? "page" : undefined}
          onClick={(e) => {
            e.preventDefault();
            onNavigate(item.name);
          }}
        >
          {item.label}
        </a>
      ))}
    </nav>
  );
}

export default Navigation;