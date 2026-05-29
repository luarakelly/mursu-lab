import { Steps } from "../../ui-lib/semantic-wrappers/Steps";
import { StepItem } from "../../ui-lib/patterns/static/StepItemLayout";
import { CircleCheck, CircleDot } from "lucide-react";

export default function Timeline() {
  return (
    <Steps connectorClassName="text-green-300">
      <StepItem label={<CircleDot size={16} />}>Deploy to staging</StepItem>
      <StepItem label={<CircleDot size={16} />}>Run smoke tests</StepItem>
      <StepItem label={<CircleCheck size={16} />}>Promote to production</StepItem>
    </Steps>
  );
}