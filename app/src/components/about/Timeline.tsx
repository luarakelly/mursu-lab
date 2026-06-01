import { Steps } from "../../ui-lib/semantic-wrappers/Steps";
import { StepItem } from "../../ui-lib/patterns/static/StepItem";

import {
  CircleCheck,
  CircleDot,
  ArrowDown
} from "lucide-react";

export default function Timeline() {
  return (
    <Steps direction="column"> 
      <StepItem label={<CircleCheck />}>Deploy to staging</StepItem>
      <StepItem label={<CircleCheck />}>Run smoke tests</StepItem>
      <StepItem label={<CircleDot />}>Promote to production</StepItem>
    </Steps>
  );
}