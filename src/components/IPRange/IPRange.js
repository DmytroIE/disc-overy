import React from "react";

import { connect } from "react-redux";

import { Form, Input, Message } from "semantic-ui-react";

import {
  getStartingIPAddress,
  getStartingIPAddressStatus,
  getEndingIPAddress,
  getEndingIPAddressStatus
} from "../../redux/selectors";

import { changeStartingIP, changeEndingIP } from "../../redux/actions";

const IPRange = ({
  startingAddress,
  endingAddress,
  startingAddressStatus,
  endingAddressStatus,
  onStartingChange,
  onEndingChange
}) => (
  <>
    <Form error={!startingAddressStatus} className="source-selector">
      <Form.Field error={!startingAddressStatus}>
        <label>Starting IP Address</label>
        <Input
          type="text"
          value={startingAddress}
          onChange={(e, { value }) => {
            onStartingChange(value);
          }}
        />
      </Form.Field>
      <Form.Field>
        <Message error header="IP address is not valid" />
      </Form.Field>
    </Form>
    <Form error={!endingAddressStatus}>
      <Form.Field error={!endingAddressStatus}>
        <label>Ending IP Address</label>
        <Input
          type="text"
          value={endingAddress}
          onChange={(e, { value }) => {
            onEndingChange(value);
          }}
        />
      </Form.Field>
      <Form.Field>
        <Message error header="IP address is not valid" />
      </Form.Field>
    </Form>
  </>
);

const mapState = state => ({
  startingAddress: getStartingIPAddress(state),
  endingAddress: getEndingIPAddress(state),
  startingAddressStatus: getStartingIPAddressStatus(state),
  endingAddressStatus: getEndingIPAddressStatus(state)
});

const mapDispatch = {
  onStartingChange: changeStartingIP,
  onEndingChange: changeEndingIP
};

export default connect(
  mapState,
  mapDispatch
)(IPRange);
