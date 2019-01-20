import React, { Component } from "react";

import { connect } from "react-redux";

import {
  getSecurityOption,
  getContextName,
  getContextEngineID,
  getAuthenticationCode,
  getAuthenticationPassword
} from "../../redux/selectors";
import {
  selectSecurityOption,
  changeContextName,
  changeContextEngineID,
  selectAuthenticationCode,
  changeAuthenticationPassword
} from "../../redux/actions";

import { Form, Input, Radio, Dropdown } from "semantic-ui-react";

import { securityOptions, authCodes } from "../../configs/configs";

class SNMPV3Form extends Component {
  handleChangeSecurityOption = (e, { value }) => {
    const { selectSecurityOption } = this.props;
    selectSecurityOption(value);
  };

  handleChangeContextName = (e, { value }) => {
    const { changeContextName } = this.props;
    changeContextName(value);
  };
  handleChangeContextEngineID = (e, { value }) => {
    const { changeContextEngineID } = this.props;
    changeContextEngineID(value);
  };

  handleSelectAuthenticationCode = (e, { value }) => {
    const { selectAuthenticationCode } = this.props;
    selectAuthenticationCode(value);
  };

  handleChangeAuthenticationPassword = (e, { value }) => {
    const { changeAuthenticationPassword } = this.props;
    changeAuthenticationPassword(value);
  };

  render() {
    const {
      securityOption,
      contextName,
      contextEngineID,
      authenticationCode,
      authenticationPassword
    } = this.props;

    return (
      <Form>
        <Form.Field>
          <Dropdown
            placeholder="Select security option"
            fluid
            search
            selection
            options={securityOptions}
            value={securityOption}
            onChange={this.handleChangeSecurityOption}
          />
        </Form.Field>
        <Form.Field>
          <label>Context Name</label>
          <Input value={contextName} onChange={this.handleChangeContextName} />
        </Form.Field>
        <Form.Field>
          <label>Context Engine ID</label>
          <Input
            value={contextEngineID}
            onChange={this.handleChangeContextEngineID}
          />
        </Form.Field>

        <Form.Field>Autentication Algorithm</Form.Field>
        <Form.Group inline className="space-around">
        {
          authCodes.map(item=>(
            <Radio
            key={item}
            label={item}
            name="radioGroup"
            value={item}
            checked={authenticationCode === item}
            onChange={this.handleSelectAuthenticationCode}
          />
          ))
        }
        </Form.Group>
 
        <Form.Field>
          <label>Autentication Password</label>
          <Input
            value={authenticationPassword}
            onChange={this.handleChangeAuthenticationPassword}
          />
        </Form.Field>
      </Form>
    );
  }
}

const mapState = state => ({
  securityOption: getSecurityOption(state),
  contextName: getContextName(state),
  contextEngineID: getContextEngineID(state),
  authenticationCode: getAuthenticationCode(state),
  authenticationPassword: getAuthenticationPassword(state)
});

const mapDispatch = {
  selectSecurityOption,
  changeContextName,
  changeContextEngineID,
  selectAuthenticationCode,
  changeAuthenticationPassword
};

export default connect(
  mapState,
  mapDispatch
)(SNMPV3Form);
