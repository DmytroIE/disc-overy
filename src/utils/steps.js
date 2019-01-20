import { steps } from "../configs/configs";

export const changeStep = currStep => {
  const stepsValues = Object.values(steps);
  if (currStep === stepsValues[stepsValues.length - 1]) {
    return currStep;
  }
  return currStep + 1;
};

export const changeStepStatusIndication = (stepNumber,currStep) => {
  if (stepNumber < currStep) {
    return { completed: true };
  }
  if (stepNumber === currStep) {
    return { active: true };
  }
  if (stepNumber > currStep) {
    return { disabled: true };
  }
};
