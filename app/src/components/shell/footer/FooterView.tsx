import { Footer } from "../../../ui-lib/compositions/footer/Footer";

export function FooterView() {
  return (    
<Footer
  layoutClassName="
    px-4
    py-8
    gap-4
  "

  center={
    <span className="text-muted text-sm">
      © 2026 Mursu Lab
    </span>
  }
/>
  );
}