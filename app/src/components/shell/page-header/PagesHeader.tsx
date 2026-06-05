import { Header } from "../../../ui-lib/semantic-wrappers/Header";
import { Stack } from "../../../ui-lib/primitives/layout/Stack";

export function PagesHeader({
  title,
  subtitle,
  description,
  media,
}: { title?: React.ReactNode; subtitle?: React.ReactNode; description?: React.ReactNode; media?: React.ReactNode }) {
    return (
        <Header 
            className="border-b px-4 py-7 max-w-2xl"
            gap="7" 
            direction="row" 
            align="center" 
            justify="space-evenly"              
        >
            <Stack gap="2">
                {title}
                {subtitle}
                {description}
            </Stack>
            
            {media}
        </Header>
    );
}
 