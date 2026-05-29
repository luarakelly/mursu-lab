import { Footer } from "../../../ui-lib/compositions/footer/Footer";
import { Center } from "../../../ui-lib/slots/Center";

export function AppFooter() {
  return (    
  <Footer>
    <Center className="py-4">
      <span className="text-muted text-sm">
        © 2026 Mursu Lab
      </span>
    </Center>
  </Footer>
  );
}