import { combineReducers } from "redux";

import {
  steps,
  securityOptionsMap,
  authCodes,
  SNMPVersions
} from "../configs/configs";

import * as actionTypes from "./actionTypes";

const currentStep = (state = steps.SOURCE, { type, payload }) => {
  switch (type) {
    case actionTypes.GO_TO_THE_STEP:
      return payload;
    default:
      return state;
  }
};

// -------------------------SOURCE--------------------------------------------

const selectedSource = (state = "", { type, payload }) => {
  switch (type) {
    case actionTypes.SELECT_SOURCE:
      return payload;
    default:
      return state;
  }
};

const address = (state = "", { type, payload }) => {
  switch (type) {
    case actionTypes.CHANGE_IP:
      return payload;
    default:
      return state;
  }
};

const isAddressCorrect = (state = true, { type, payload }) => {
  switch (type) {
    case actionTypes.CHANGE_IP_STATUS:
      return payload;
    default:
      return state;
  }
};

const IP = combineReducers({ address, isCorrect: isAddressCorrect });

const startingAddress = (state = "", { type, payload }) => {
  switch (type) {
    case actionTypes.CHANGE_STARTING_IP:
      return payload;
    default:
      return state;
  }
};

const isStratingAddressCorrect = (state = true, { type, payload }) => {
  switch (type) {
    case actionTypes.CHANGE_STARTING_IP_STATUS:
      return payload;
    default:
      return state;
  }
};

const startingIPAddress = combineReducers({
  startingAddress,
  isCorrect: isStratingAddressCorrect
});


const endingAddress = (state = "", { type, payload }) => {
  switch (type) {
    case actionTypes.CHANGE_ENDING_IP:
      return payload;
    default:
      return state;
  }
};

const isEndingAddressCorrect = (state = true, { type, payload }) => {
  switch (type) {
    case actionTypes.CHANGE_ENDING_IP_STATUS:
      return payload;
    default:
      return state;
  }
};

const endingIPAddress = combineReducers({
  endingAddress,
  isCorrect: isEndingAddressCorrect
});

const CSVFile = (state = "", { type, payload }) => {
  switch (type) {
    case actionTypes.SELECT_CSV_FILE:
      return payload;
    default:
      return state;
  }
};

const IPRange = combineReducers({ startingIPAddress, endingIPAddress });

const sources = combineReducers({ IP, IPRange, CSVFile });

const source = combineReducers({
  selectedSource,
  sources
});

// -------------------------OPTIONS--------------------------------------------

const SNMPSelected = (state = false, { type }) => {
  switch (type) {
    case actionTypes.SELECT_SNMP_OPTION:
      return !state;
    default:
      return state;
  }
};

const LinkSelected = (state = false, { type }) => {
  switch (type) {
    case actionTypes.SELECT_LINK_OPTION:
      return !state;
    default:
      return state;
  }
};

const VLANSelected = (state = false, { type }) => {
  switch (type) {
    case actionTypes.SELECT_VLAN_OPTION:
      return !state;
    default:
      return state;
  }
};

const PortsSelected = (state = false, { type }) => {
  switch (type) {
    case actionTypes.SELECT_PORTS_OPTION:
      return !state;
    default:
      return state;
  }
};

const optionsSelectionStatus = combineReducers({
  SNMPSelected,
  LinkSelected,
  VLANSelected,
  PortsSelected
});

// -------------------------SNMP--------------------------------------------

const version = (state = SNMPVersions[1], { type, payload }) => {
  switch (type) {
    case actionTypes.SELECT_SNMP_VERSION:
      return payload;
    default:
      return state;
  }
};

const readCommunity = (state = "public", { type, payload }) => {
  switch (type) {
    case actionTypes.CHANGE_READ_COMMUNITY:
      return payload;
    default:
      return state;
  }
};

// -------------------------SNMP V3--------------------------------------------

const securityOptions = (state = securityOptionsMap.ANP, { type, payload }) => {
  switch (type) {
    case actionTypes.SELECT_SECURITY_OPTION:
      return payload;
    default:
      return state;
  }
};

const contextName = (state = "sample context", { type, payload }) => {
  switch (type) {
    case actionTypes.CHANGE_CONTEXT_NAME:
      return payload;
    default:
      return state;
  }
};

const contextEngineID = (state = "sample engine", { type, payload }) => {
  switch (type) {
    case actionTypes.CHANGE_CONTEXT_ENGINE_ID:
      return payload;
    default:
      return state;
  }
};

const code = (state = authCodes[1], { type, payload }) => {
  switch (type) {
    case actionTypes.SELECT_AUTHENTICATION_CODE:
      return payload;
    default:
      return state;
  }
};

const password = (state = "random password", { type, payload }) => {
  switch (type) {
    case actionTypes.CHANGE_AUTHENTICATION_PASSWORD:
      return payload;
    default:
      return state;
  }
};

const SNMPv1 = (state = null, { type }) => {
  switch (type) {
    default:
      return state;
  }
};

const SNMPv2 = (state = null, { type }) => {
  switch (type) {
    default:
      return state;
  }
};

const authenticationAlgorithm = combineReducers({ code, password });

const SNMPv3 = combineReducers({
  readCommunity,
  securityOptions,
  contextName,
  contextEngineID,
  authenticationAlgorithm
});

const SNMP = combineReducers({
  version,

  SNMPv1,
  SNMPv2,
  SNMPv3
});

const options = combineReducers({ optionsSelectionStatus, SNMP });

const discoverModalStatus = (state = false, { type }) => {
  switch (type) {
    case actionTypes.OPEN_DISCOVER_MODAL:
      return true;
    case actionTypes.CLOSE_DISCOVER_MODAL:
      return false;
    default:
      return state;
  }
};

export default combineReducers({
  currentStep,
  source,
  options,
  discoverModalStatus
});
