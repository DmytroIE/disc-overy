import React, { Component } from "react";

import { connect } from "react-redux";

import { getCurrentStep, getAnyOptionSelected } from "./redux/selectors";

import { Button, Grid, Container } from "semantic-ui-react";

import StepsPanel from "./components/StepsPanel/StepsPanel";
import SourceForm from "./components/SourceForm/SourceForm";
import OptionsForm from "./components/OptionsForm/OptionsForm";
import SelectedOptionsForm from "./components/SelectedOptionsForm/SelectedOptionsForm";
import DiscoverButton from "./components/DiscoverButton/DiscoverButton";
import DiscoverModal from "./components/DiscoverModal/DiscoverModal";

import { steps } from "./configs/configs";

class App extends Component {
  render() {
    const { currentStep, isAnyOptionSelected } = this.props;
    return (
      <Container className="page">
        <Container className="steps-container">
          <StepsPanel />
        </Container>
        <Container className="input-field">
          <Container className="input-field--first">
            <Grid columns={2} divided>
              <Grid.Row>
                <Grid.Column>
                  <Container>
                    <SourceForm />
                  </Container>
                </Grid.Column>
                <Grid.Column>
                  <Container>
                    {currentStep > steps.SOURCE && <OptionsForm />}
                  </Container>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Container>
          {currentStep > steps.SOURCE && isAnyOptionSelected && (
            <Container className="input-field--second">
              <SelectedOptionsForm />
            </Container>
          )}
        </Container> 

        <Container className="justified">
          <Button>Clear</Button>
          {currentStep > steps.SOURCE && <DiscoverButton />}
        </Container>
        <DiscoverModal />
      </Container>
    );
  }
}

const mapState = state => ({
  currentStep: getCurrentStep(state),
  isAnyOptionSelected: getAnyOptionSelected(state)
});

export default connect(mapState)(App);
