import React from "react";

import { connect } from "react-redux";

import { goToTheStep } from "../../redux/actions";
import { steps } from "../../configs/configs";

import { Button } from "semantic-ui-react";

const DiscoverButton = ({ onClick }) => (
  <Button color="green" onClick={() => onClick(steps.INPUT_DATA)}>
    Discover
  </Button>
);

const mapDispatch = {
  onClick: goToTheStep
};

export default connect(
  null,
  mapDispatch
)(DiscoverButton);
