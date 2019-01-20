import React from "react";

import { connect } from "react-redux";

import { getDiscoverModalStatus } from "../../redux/selectors";
import { closeDiscoverModal } from "../../redux/actions";

import { formGatheredDataObject } from "../../utils/data";

import { Button, Header, Modal, Icon } from "semantic-ui-react";

const DiscoverModal = ({ open, objectToShow, closeDiscoverModal }) => (
  <Modal open={open} onClose={closeDiscoverModal} basic size="small">
    <Header icon="browser" content="Gathered data" />
    <Modal.Content>
      <pre>{JSON.stringify(objectToShow, null, 2)}</pre>
    </Modal.Content>
    <Modal.Actions>
      <Button color="green" onClick={closeDiscoverModal}>
        <Icon name="checkmark" /> OK
      </Button>
    </Modal.Actions>
  </Modal>
);

const mapState = state => ({
  open: getDiscoverModalStatus(state),
  objectToShow: formGatheredDataObject(state)
});

const mapDispatch = {
  closeDiscoverModal
};

export default connect(
  mapState,
  mapDispatch
)(DiscoverModal);
