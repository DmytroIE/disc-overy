import React from "react";

import { connect } from "react-redux";

import { getIPAddress, getIPAddressStatus } from "../../redux/selectors";
import { changeIP } from "../../redux/actions";

import { Form, Input, Message } from "semantic-ui-react";

const IPAddress = ({ address, status, onChange }) => (
  <Form error={!status}>
    <Form.Field error={!status}>
      <label>IP</label>
      <Input
        type="text"
        value={address}
        onChange={(e, { value }) => {
          onChange(value);
        }}
      />
    </Form.Field>
    <Form.Field>
      <Message error header="IP address is not valid" />
    </Form.Field>
  </Form>
);

const mapState = state => ({
  address: getIPAddress(state),
  status: getIPAddressStatus(state)
});

const mapDispatch = {
  onChange: changeIP
};

export default connect(
  mapState,
  mapDispatch
)(IPAddress);
