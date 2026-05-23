// NavIcons.tsx
// A lightweight React island that renders the lucide-react icons for the navbar.
// Used with client:load in NavBar.astro.

import { useState, useEffect } from "react";
import { Moon, Sun } from "lucide-react";
import { Right } from "../../../ui-lib/slots/Right";
import {
  HeaderIconButton,
  HeaderIconLink,
  HeaderAction,
} from "../../../ui-lib/compositions/header/Header";

//
// THEME TOGGLE
//

export function ThemeToggle() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  useEffect(() => {
    const stored = localStorage.getItem("theme") as "dark" | "light" | null;
    const initial = stored ?? "dark";
    setTheme(initial);
    document.documentElement.dataset.theme = initial;
  }, []);

  function toggle() {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    localStorage.setItem("theme", next);
    document.documentElement.dataset.theme = next;
  }

  return (
    <HeaderIconButton
      onClick={toggle}
      className="
        rounded-md
        text-[var(--foreground-muted)]
        hover:text-[var(--foreground)]
        hover:bg-[var(--surface-hover)]
        transition-colors
      "
      aria-label="Toggle theme"
      title="Toggle theme"
    >
      {theme === "dark" ? (
        <Moon size={18} strokeWidth={1.75} />
      ) : (
        <Sun size={18} strokeWidth={1.75} />
      )}
    </HeaderIconButton>
  );
}

//
// LANGUAGE TOGGLE
//

type Lang = "en" | "fi";

export function LangToggle() {
  const [lang, setLang] = useState<"en" | "fi">("en");

  useEffect(() => {
    const stored = localStorage.getItem("lang") as "en" | "fi" | null;
    const initial = stored ?? "en";
    setLang(initial);
    document.documentElement.lang = initial;
  }, []);

  function toggle() {
    const next = lang === "en" ? "fi" : "en";
    setLang(next);
    localStorage.setItem("lang", next);
    document.documentElement.lang = next;
  }

  return (
    <HeaderIconButton
      onClick={toggle}
      className="
        rounded-md
        border border-[var(--border)]
        text-xs font-mono font-semibold tracking-widest
        text-[var(--foreground-muted)]
        hover:text-[var(--foreground)]
        hover:border-[var(--foreground-muted)]
        hover:bg-[var(--surface-hover)]
        transition-colors
      "
      aria-label="Toggle language"
      title="Toggle language"
    >
      <span aria-hidden="true">
        {lang === "en" ? "🇬🇧" : "🇫🇮"}
      </span>
      <span>{lang.toUpperCase()}</span>
    </HeaderIconButton>
  );
}

//
// GITHUB LINK
//

export function GithubLink({ href }: { href: string }) {
  return (
    <HeaderIconLink
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="
        rounded-md
        text-[var(--foreground-muted)]
        hover:text-[var(--foreground)]
        hover:bg-[var(--surface-hover)]
        transition-colors
      "
      aria-label="GitHub profile"
      title="GitHub"
    >
      <svg
        width={18}
        height={18}
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2Z" />
      </svg>
    </HeaderIconLink>
  );
}

//
// NAV CONTROLS
//

export default function HeaderControls({
  githubUrl,
}: {
  githubUrl: string;
}) {
  return (
    <Right className="gap-2">
      <LangToggle />
      <ThemeToggle />
      <GithubLink href={githubUrl} />

      <HeaderAction
        href="/contact"
        style={{
    fontSize: "0.875rem",
    fontWeight: 500,
    letterSpacing: "0.02em",
  }}
        className="
          px-4 py-2
          rounded-md
          border
          hover:bg-[var(--accent)]
        "
      >
        Get in touch
      </HeaderAction>
    </Right>
  );
}


/**
 * {/* Mobile hamburger — visible only on mobile via CSS *}
      <button
        onClick={() => setMobileOpen((o) => !o)}
        className="mobile-menu-btn"
        aria-label={mobileOpen ? "Close menu" : "Open menu"}
        aria-expanded={mobileOpen}
        aria-controls="mobile-menu"
      >
        {mobileOpen ? (
          <X size={20} strokeWidth={2} aria-hidden="true" />
        ) : (
          <Menu size={20} strokeWidth={2} aria-hidden="true" />
        )}
      </button>

      {/* Mobile drawer *}
      {mobileOpen && (
        <div id="mobile-menu" className="mobile-menu">
          {navLinks.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className={`mobile-nav-link${isActive(href) ? " mobile-nav-link--active" : ""}`}
              aria-current={isActive(href) ? "page" : undefined}
            >
              {label}
            </a>
          ))}
          {/* Lang toggle in mobile drawer too *}
          <div className="mobile-lang">
            <LangToggle />
          </div>
        </div>
      )}
 */