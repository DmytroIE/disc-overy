import React, { Component } from "react";

import { connect } from "react-redux";

import {
  getSNMPSelection,
  getLinkSelection,
  getVLANSelection,
  getPortsSelection
} from "../../redux/selectors";

import { Accordion, Icon } from "semantic-ui-react";

import SNMPForm from "../SNMPForm/SNMPForm";

class SelectedOptionsForm extends Component {
  state = { activeIndex: 0 };

  handleClick = (e, titleProps) => {
    const { index } = titleProps;
    const { activeIndex } = this.state;
    const newIndex = activeIndex === index ? -1 : index;

    this.setState({ activeIndex: newIndex });
  };

  render() {
    const { activeIndex } = this.state;
    const { SNMP/*, Link, VLAN, Ports */} = this.props;
    return (
      <Accordion>
        <Accordion.Title
          active={activeIndex === 0}
          index={0}
          onClick={this.handleClick}
        >
          <Icon name="dropdown" />
          Selected Options
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 0}>
          {SNMP && <SNMPForm />}
        </Accordion.Content>
      </Accordion>
    );
  }
}

const mapState = state => ({
  SNMP: getSNMPSelection(state),
  Link: getLinkSelection(state),
  VLAN: getVLANSelection(state),
  Ports: getPortsSelection(state)
});

export default connect(mapState)(SelectedOptionsForm);
