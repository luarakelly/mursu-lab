import { Dropdown } from "../../../ui-lib/patterns/interactive/Dropdown";
import { Stack } from "../../../ui-lib/primitives/layout/Stack";
import { Button } from "../../../ui-lib/primitives/inputs/Button";

import { Menu } from "lucide-react";

import { Navigation } from "../../../ui-lib/semantic-wrappers/Navigation";
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
        <Button className="md:hide" aria-label="Open menu">
          <Menu size={18} />
        </Button>
      }

      content={
        <Stack>
          <HeaderControls 
            githubUrl={githubUrl}
          />

          <Navigation direction="column">
            {navLinks.map((link) => (
              <Button
                key={link.href}
                as="a"
                href={link.href}
              >
                {link.label}
              </Button>
            ))}
          </Navigation>
        </Stack>
      }
    />
  );
}