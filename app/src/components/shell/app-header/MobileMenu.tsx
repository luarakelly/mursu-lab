import { Dropdown } from "../../../ui-lib/patterns/interactive/Dropdown";
import { Stack } from "../../../ui-lib/primitives/layout/Stack";
import { Button } from "../../../ui-lib/primitives/inputs/Button";

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
              <Button
                key={link.href}
                as="a"
                href={link.href}
              >
                {link.label}
              </Button>
            ))}
          </Stack>
        </Stack>
      }
    />
  );
}