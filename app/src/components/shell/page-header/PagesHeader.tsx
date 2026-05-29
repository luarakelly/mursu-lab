import { Header } from "../../../ui-lib/semantic-wrappers/Header";
import { RowLayout } from "../../../ui-lib/patterns/static/RowlLayout";
import { Stack } from "../../../ui-lib/primitives/layout/Stack";

export function PagesHeader({
  title,
  subtitle,
  description,
  media,
}: { title?: React.ReactNode; subtitle?: React.ReactNode; description?: React.ReactNode; media?: React.ReactNode }) {
    return (
        <Header className="border-b">
            <RowLayout className="pl-30 py-16"
                left=
                {<Stack>
                    {title}
                    {subtitle}
                    {description ? description : null}
                </Stack>}
                center={media}
            />
        </Header>
    );
}