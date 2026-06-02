import { Footer } from "../../../ui-lib/semantic-wrappers/Footer";
import { Text } from "../../../ui-lib/primitives/typography/Text";

export function AppFooter() {
  return (    
      <Footer
        align="center"
        className="py-2 px-4 border-t"
      >
      <Text className="text-muted text-sm">
        © 2026 Mursu Lab
      </Text>

      <Text className="text-muted text-xs">
        Engineering systems. Sharing the process.
      </Text>
    </Footer>
  );
}