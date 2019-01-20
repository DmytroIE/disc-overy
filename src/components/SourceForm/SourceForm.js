import React, { Component } from "react";

import { connect } from "react-redux";

import IPAddress from "../IPAddress/IPAddress";
import IPRange from "../IPRange/IPRange";
import FileSelector from "../FileSelector/FileSelector";

import { getSelectedSource } from "../../redux/selectors";
import { selectSource } from "../../redux/actions";

import { Accordion, Icon, Dropdown, Container, Form } from "semantic-ui-react";

import { sourceOptions, sourceOptionsMap } from "../../configs/configs";

class SourceForm extends Component {
  state = { activeIndex: 0 };

  handleClick = (e, titleProps) => {
    const { index } = titleProps;
    const { activeIndex } = this.state;
    const newIndex = activeIndex === index ? -1 : index;

    this.setState({ activeIndex: newIndex });
  };

  onSelectSource = (evt, { value }) => {
    const { onSelect } = this.props;
    onSelect(value);
  };

  render() {
    const { activeIndex } = this.state;
    const { selectedSource } = this.props;
    return (
      <>
        <Accordion>
          <Accordion.Title
            active={activeIndex === 0}
            index={0}
            onClick={this.handleClick}
          >
            <Icon name="dropdown" />
            Discovery Source
          </Accordion.Title>
          <Accordion.Content active={activeIndex === 0}>
            <Container className="source-selector">
              <Form>
                <Form.Field>
                  <Dropdown
                    placeholder="Select source"
                    fluid
                    search
                    selection
                    options={sourceOptions}
                    value={selectedSource}
                    onChange={this.onSelectSource}
                  />
                </Form.Field>
              </Form>
            </Container>
            <Container>
              {selectedSource === sourceOptionsMap.IP && <IPAddress />}
              {selectedSource === sourceOptionsMap.IPRange && <IPRange />}
              {selectedSource === sourceOptionsMap.CSVFile && <FileSelector />}
            </Container>
          </Accordion.Content>
        </Accordion>
      </>
    );
  }
}

const mapState = state => ({
  selectedSource: getSelectedSource(state)
});

const mapDispatch = {
  onSelect: selectSource
};

export default connect(
  mapState,
  mapDispatch
)(SourceForm);
