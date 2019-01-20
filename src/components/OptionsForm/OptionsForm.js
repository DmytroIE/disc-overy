import React, { Component } from "react";

import { connect } from "react-redux";

import {
  getSNMPSelection,
  getLinkSelection,
  getVLANSelection,
  getPortsSelection
} from "../../redux/selectors";
import {
  selectSNPM,
  selectLink,
  selectVLAN,
  selectPorts
} from "../../redux/actions";

import { Accordion, Icon, Checkbox, Form } from "semantic-ui-react";

class OptionsForm extends Component {
  state = { activeIndex: 0 };

  handleClick = (e, titleProps) => {
    const { index } = titleProps;
    const { activeIndex } = this.state;
    const newIndex = activeIndex === index ? -1 : index;

    this.setState({ activeIndex: newIndex });
  };

  render() {
    const { activeIndex } = this.state;
    const {
      selectSNPM,
      selectLink,
      selectVLAN,
      selectPorts,
      SNMP,
      Link,
      VLAN,
      Ports
    } = this.props;
    return (
      <>
        <Accordion>
          <Accordion.Title
            active={activeIndex === 0}
            index={0}
            onClick={this.handleClick}
          >
            <Icon name="dropdown" />
            Discovery Options
          </Accordion.Title>
          <Accordion.Content active={activeIndex === 0}>
            <Form>
              <Form.Field>
                <Checkbox label="SNMP" onChange={selectSNPM} checked={SNMP} />
              </Form.Field>
              <Form.Field>
                <Checkbox label="Link" onChange={selectLink} checked={Link} />
              </Form.Field>
              <Form.Field>
                <Checkbox label="VLAN" onChange={selectVLAN} checked={VLAN} />
              </Form.Field>
              <Form.Field>
                <Checkbox
                  label="Ports"
                  onChange={selectPorts}
                  checked={Ports}
                />
              </Form.Field>
            </Form>
          </Accordion.Content>
        </Accordion>
      </>
    );
  }
}

const mapState = state => ({
  SNMP: getSNMPSelection(state),
  Link: getLinkSelection(state),
  VLAN: getVLANSelection(state),
  Ports: getPortsSelection(state)
});

const mapDispatch = {
  selectSNPM,
  selectLink,
  selectVLAN,
  selectPorts
};

export default connect(
  mapState,
  mapDispatch
)(OptionsForm);
