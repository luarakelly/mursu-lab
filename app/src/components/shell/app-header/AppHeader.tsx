import { Header } from "../../../ui-lib/semantic-wrappers/Header";
import { Navigation } from "../../../ui-lib/semantic-wrappers/Navigation";

import { Stack } from "../../../ui-lib/primitives/layout/Stack";
import { Button } from "../../../ui-lib/primitives/inputs/Button";
import { Text } from "../../../ui-lib/primitives/typography/Text";

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

export function AppHeader({ currentPath }: Props) {
  function isActive(href: string) {
    if (href === "/") return currentPath === "/";
    return currentPath.startsWith(href);
  }

  return (
    /* MAIN HEADER ROW */
    <Header 
      className="font-mono text-sm border-b p-3 gap-4"
      direction="row"
      align="center"
      justify="space-between"
      wrap="wrap"
    >
        {/* LEFT / BRAND */}
        <Button as="a" href="/" className="gap-3">
          <FlaskConical
            size={26}
            strokeWidth={1.75}
            aria-hidden="true"
          />

          <Stack gap="0">
            <Text as="h1" className="text-sm font-semibold">
              MURSU LAB
            </Text>

            <Text as="p" className="text-xs text-muted">
              Building in public
            </Text>
          </Stack>
        </Button>

        {/* CENTER / NAV */}
        <Navigation className="hide md:show-flex">
          {navLinks.map(({ href, label }) => (
            <Button
              key={href}
              as="a"
              href={href}
              aria-current={isActive(href) ? "page" : undefined}
              className="
                hide md:show-flex
                text-sm
                px-3
                py-2
                font-mono
              "
            >
              {label}
            </Button>
          ))}
        </Navigation>

        {/* RIGHT / ACTIONS */}
        <Stack
          direction="row"
          align="center"
          className="gap-2 shrink-0"
        >
          {/* desktop controls */}
          <div className="hide md:show-flex">
            <HeaderControls githubUrl={GITHUB_URL} />
          </div>

          {/* mobile menu */}
          <MobileMenu
            navLinks={navLinks}
            githubUrl={GITHUB_URL}
          />
        </Stack>
    </Header>
  );
}
