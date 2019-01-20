import React from "react";

import { connect } from "react-redux";

import { Step } from "semantic-ui-react";

import { getCurrentStep } from "../../redux/selectors";

import { changeStepStatusIndication } from "../../utils/steps";

import { stepsNames } from "../../configs/configs";

const StepsPanel = ({ currentStep }) => (
  <Step.Group ordered widths={stepsNames.length}>
    {stepsNames.map(item => (
      <Step
        key={item.number}
        {...changeStepStatusIndication(item.number, currentStep)}
      >
        <Step.Content>
          <Step.Description>{item.text}</Step.Description>
        </Step.Content>
      </Step>
    ))}
  </Step.Group>
);

const mapState = state => ({
  currentStep: getCurrentStep(state)
});

export default connect(mapState)(StepsPanel);
