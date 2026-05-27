import { Dropdown } from "../../../ui-lib/compositions/dropdown/Dropdown";
import { Stack } from "../../../ui-lib/primitives/layout/Stack";
import { Link } from "../../../ui-lib/primitives/inputs/Link";

import { Menu } from "lucide-react";

import { HeaderControls } from "./HeaderControls";

type Props = {
  navLinks: {
    href: string;
    label: string;
  }[];

  githubUrl: string;
};

export function MobileMenu({
  navLinks,
  githubUrl,
}: Props) {
  return (
    <Dropdown
  align="right"

  className="md:hide"

  trigger={
    <button
      className="
        p-2
        rounded-md
        border
      "
    >
      <Menu size={18} />
    </button>
  }

  contentClassName="
    mt-2
    p-2

    max-w-screen

    bg-[var(--background)]
  "
      content={
        <Stack
        >
          <HeaderControls 
            githubUrl={githubUrl}
          />

          <Stack className="gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
              >
                {link.label}
              </Link>
            ))}
          </Stack>
        </Stack>
      }
    />
  );
}