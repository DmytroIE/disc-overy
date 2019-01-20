import React from "react";

import { connect } from "react-redux";

import store from "../../redux/store";
import { getCSVPath } from "../../redux/selectors";
import { selectCSVFile, goToTheStep } from "../../redux/actions";

import { Form, Button, Container } from "semantic-ui-react";

import { steps } from "../../configs/configs";

const fileDialog = require("file-dialog");

const openFileDialog = async () => {
  const files = await fileDialog({ accept: "image/*" });
  console.log(files[0].name);
  store.dispatch(selectCSVFile(files[0].name));
  store.dispatch(goToTheStep(steps.OPTIONS));
};

const FileSelector = ({ path }) => (
  <Form>
    <Container textAlign="center">
      <Form.Field>
        <Button color='teal' onClick={openFileDialog}>Select a file ...</Button>
      </Form.Field>
      {path && <p>{path}</p>}
    </Container>
  </Form>
);

const mapState = state => ({
  path: getCSVPath(state)
});

export default connect(mapState)(FileSelector);
