import { Footer } from "../../../ui-lib/semantic-wrappers/Footer";
import { Stack } from "../../../ui-lib/primitives/layout/Stack";
import { Text } from "../../../ui-lib/primitives/typography/Text";

export function AppFooter() {
  return (    
  <Footer>
    <Stack align="center" className="py-2">
      <Text className="text-muted text-sm"> 
        Engineering systems. Sharing the process.
      </Text>
      <Text className="text-muted text-sm">
        © 2026 Mursu Lab
      </Text>
    </Stack>
  </Footer>
  );
}