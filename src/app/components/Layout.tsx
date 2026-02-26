import { Outlet, Link } from "react-router";
import { Instagram, Menu as MenuIcon, X } from "lucide-react";
import { useState } from "react";
import { RESTAURANT_INFO, NAVIGATION } from "@/app/constants";

export function Layout() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-page-surface font-mono overflow-x-hidden">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-page-surface z-50 border-b border-border overflow-x-hidden">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
          <div className="flex items-center justify-between relative min-h-[2.5rem]">
            {/* Left Navigation - Desktop */}
            <div className="hidden sm:flex items-center gap-6">
              <Link to={NAVIGATION.home.path} className="hover:underline">
                {NAVIGATION.home.label}
              </Link>
              <Link to={NAVIGATION.menu.path} className="hover:underline">
                {NAVIGATION.menu.label}
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="sm:hidden shrink-0 z-10"
              aria-label="Menü umschalten"
            >
              {mobileMenuOpen ? <X size={24} /> : <MenuIcon size={24} />}
            </button>

            {/* Center Title - positioned between the two side elements */}
            <Link
              to={NAVIGATION.home.path}
              className="absolute left-1/2 -translate-x-1/2 px-2 text-center"
            >
              <h1 className="text-lg sm:text-xl">{RESTAURANT_INFO.name}</h1>
            </Link>

            {/* Right - Instagram Icon */}
            <a
              href={RESTAURANT_INFO.contact.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 hover:opacity-70"
              aria-label="Instagram"
            >
              <Instagram size={24} />
            </a>
          </div>

          {/* Mobile Menu Dropdown */}
          {mobileMenuOpen && (
            <div className="sm:hidden mt-4 pt-4 border-t border-border">
              <div className="flex flex-col gap-4">
                <Link
                  to={NAVIGATION.home.path}
                  className="hover:underline"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {NAVIGATION.home.label}
                </Link>
                <Link
                  to={NAVIGATION.menu.path}
                  className="hover:underline"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {NAVIGATION.menu.label}
                </Link>
              </div>
            </div>
          )}
        </nav>
      </header>

      {/* Main Content */}
      <main className="pt-20 sm:pt-24">
        <Outlet />
      </main>
    </div>
  );
}
