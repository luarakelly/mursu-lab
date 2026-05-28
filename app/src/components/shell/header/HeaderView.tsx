// TODO: Review classname usage between the apps own CSS and the UI lib and the Talwind utilities.
import { Header } from "../../../ui-lib/compositions/header/Header";
import { Navigation } from "../../../ui-lib/patterns/Navigation";

import { Button } from "../../../ui-lib/primitives/inputs/Button";
import { Stack } from "../../../ui-lib/primitives/layout/Stack";

import { FlaskConical } from "lucide-react";

import { HeaderControls } from "./HeaderControls";
import { MobileMenu } from "./MobileMenu";

type Props = {
  currentPath: string;
};

const GITHUB_URL = "https://github.com/luarakelly";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/blog", label: "Blog" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
];

export function HeaderView({ currentPath }: Props) {
  function isActive(href: string) {
    if (href === "/") return currentPath === "/";
    return currentPath.startsWith(href);
  }

  const left = (
    <Button
      as="a"
      href="/"
      className="gap-2"
    >
      <FlaskConical
        size={26}
        strokeWidth={1.75}
        className="
          text-[var(--accent)]
          shrink-0
        "
        aria-hidden="true"
      />

      <Stack className="leading-tight ">
        <h1
          className="
            text-sm
            
            font-semibold
            tracking-tight
          "
        >
          MURSU LAB
        </h1>

        <p
          className="
            text-muted
            text-sm
          "
        >
          Engineering systems. Sharing the process.
        </p>
      </Stack>
    </Button>
  );

  const center = (
    <Navigation
      className="
        hide md:show
      "
    >
      {navLinks.map(({ href, label }) => (
        <Button
          key={href}
          as="a"
          href={href}
          className={[
            `
            text-sm
            font-mono

            relative
            px-4
            py-6

            transition-colors
            `,
            isActive(href) &&
              `
              after:absolute
              after:bottom-0
              after:left-2
              after:right-2
              after:h-[2px]
              after:bg-[var(--accent)]
              after:rounded-t
              `,
          ].join(" ")}
        >
          {label}
        </Button>
      ))}
    </Navigation>
  );

  const right = (
  <>
    <div className="hide md:show">
      <HeaderControls
        githubUrl={GITHUB_URL}
      />
    </div>

    <MobileMenu
      navLinks={navLinks}
      githubUrl={GITHUB_URL}
    />
  </>
);

  return (
    <Header
  sticky

  left={left}
  center={center}
  right={right}

  className="
    font-mono
    text-sm
  "

  layoutClassName="
    gap-4
    px-4
    min-h-[72px]
  "
/>
  );
}
