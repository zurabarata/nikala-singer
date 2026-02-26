import { Link } from "react-router";
import { RESTAURANT_INFO, NAVIGATION } from "../constants";

export function Footer() {
  return (
    <footer className="text-center border-t border-black/10 pt-8 mt-16">
      <nav className="flex items-center justify-center gap-2 mb-4 flex-wrap">
        <Link to={NAVIGATION.home.path} className="hover:underline">
          {NAVIGATION.home.label}
        </Link>
        <span>·</span>
        <Link to={NAVIGATION.location.path} className="hover:underline">
          {NAVIGATION.location.label}
        </Link>
        <span>·</span>
        <Link to={NAVIGATION.menu.path} className="hover:underline">
          {NAVIGATION.menu.label}
        </Link>
      </nav>
      <a href={`tel:${RESTAURANT_INFO.contact.phone}`} className="hover:underline">
        {RESTAURANT_INFO.contact.phoneDisplay}
      </a>
    </footer>
  );
}
