import React, { Component } from "react";

import { connect } from "react-redux";

import { getSNMPVersion, getReadCommunity } from "../../redux/selectors";
import { selectSNMPVersion, changeReadCommunity } from "../../redux/actions";

import {
  Accordion,
  Icon,
  Radio,
  Form,
  Input,
  Container
} from "semantic-ui-react";

import SNMPV3Form from "../SNMPV3Form/SNMPV3Form";

import { SNMPVersions } from "../../configs/configs";

class SNMPForm extends Component {
  state = { activeIndex: 0 };

  handleClick = (e, titleProps) => {
    const { index } = titleProps;
    const { activeIndex } = this.state;
    const newIndex = activeIndex === index ? -1 : index;

    this.setState({ activeIndex: newIndex });
  };

  handleChangeVersion = (e, { value }) => {
    const { selectSNMPVersion } = this.props;
    selectSNMPVersion(value);
  };

  handleChangeReadCommunity = (e, { value }) => {
    const { changeReadCommunity } = this.props;
    changeReadCommunity(value);
  };

  render() {
    const { activeIndex } = this.state;
    const { version, readCommunity } = this.props;
    return (
      <Accordion>
        <Accordion.Title
          active={activeIndex === 0}
          index={0}
          onClick={this.handleClick}
        >
          <Icon name="dropdown" />
          SMNP Version
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 0}>
          <Container className="SNMP-form">
            <Form>
              <Form.Group inline className="space-around">
                {SNMPVersions.map(item => (
                  <Radio
                    key={item}
                    label={`V${item}`}
                    name="radioGroup"
                    value={item}
                    checked={version === item}
                    onChange={this.handleChangeVersion}
                  />
                ))}
              </Form.Group>

              <Form.Field>
                <label>Read community</label>
                <Input
                  value={readCommunity}
                  onChange={this.handleChangeReadCommunity}
                />
              </Form.Field>
            </Form>
          </Container>
          <Container>{version === "3" && <SNMPV3Form />}</Container>
        </Accordion.Content>
      </Accordion>
    );
  }
}

const mapState = state => ({
  version: getSNMPVersion(state),
  readCommunity: getReadCommunity(state)
});

const mapDispatch = {
  selectSNMPVersion,
  changeReadCommunity
};

export default connect(
  mapState,
  mapDispatch
)(SNMPForm);
