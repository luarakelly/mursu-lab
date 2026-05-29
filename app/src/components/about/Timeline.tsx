import { Steps } from "../../ui-lib/semantic-wrappers/Steps";
import { StepItem } from "../../ui-lib/patterns/static/StepItemLayout";
import { CircleCheck, CircleDot } from "lucide-react";

export default function Timeline() {
  return (
    <Steps direction="row" connectorClassName="text-green-300">
      <StepItem label={1}>Deploy to staging</StepItem>
      <StepItem label={2}>Run smoke tests</StepItem>
      <StepItem label={3}>Promote to production</StepItem>
    </Steps>
  );
}