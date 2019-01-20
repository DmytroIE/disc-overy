import * as actionTypes from './actionTypes';

export const goToTheStep = (numberOfStep) => ({
  type: actionTypes.GO_TO_THE_STEP,
  payload: numberOfStep,
});

export const selectSource = source => ({
  type: actionTypes.SELECT_SOURCE,
  payload: source,
});

export const changeIP = text => ({
  type: actionTypes.CHANGE_IP,
  payload: text,
});

export const changeIPstatus = status => ({
  type: actionTypes.CHANGE_IP_STATUS,
  payload: status,
});

export const changeStartingIP = text => ({
  type: actionTypes.CHANGE_STARTING_IP,
  payload: text,
});

export const changeStartingIPstatus = status => ({
  type: actionTypes.CHANGE_STARTING_IP_STATUS,
  payload: status,
});

export const changeEndingIP = text => ({
  type: actionTypes.CHANGE_ENDING_IP,
  payload: text,
});

export const changeEndingIPstatus = status => ({
  type: actionTypes.CHANGE_ENDING_IP_STATUS,
  payload: status,
});

export const selectCSVFile = path => ({
  type: actionTypes.SELECT_CSV_FILE,
  payload: `C:\\fakepath\\${path}`,
});

export const selectSNPM = () => ({
  type: actionTypes.SELECT_SNMP_OPTION,
});

export const selectLink = () => ({
  type: actionTypes.SELECT_LINK_OPTION,
});

export const selectVLAN = () => ({
  type: actionTypes.SELECT_VLAN_OPTION,
});

export const selectPorts = () => ({
  type: actionTypes.SELECT_PORTS_OPTION,
});

export const selectSNMPVersion = version => ({
  type: actionTypes.SELECT_SNMP_VERSION,
  payload: version,
});

export const changeReadCommunity = readCommunity => ({
  type: actionTypes.CHANGE_READ_COMMUNITY,
  payload: readCommunity,
});

export const selectSecurityOption = option => ({
  type: actionTypes.SELECT_SECURITY_OPTION,
  payload: option,
});

export const changeContextName = name => ({
  type: actionTypes.CHANGE_CONTEXT_NAME,
  payload: name,
});

export const changeContextEngineID = id => ({
  type: actionTypes.CHANGE_CONTEXT_ENGINE_ID,
  payload: id,
});

export const selectAuthenticationCode = code => ({
  type: actionTypes.SELECT_AUTHENTICATION_CODE,
  payload: code,
});

export const changeAuthenticationPassword = password => ({
  type: actionTypes.CHANGE_AUTHENTICATION_PASSWORD,
  payload: password,
});


export const openDiscoverModal = () => ({
  type: actionTypes.OPEN_DISCOVER_MODAL,
});

export const closeDiscoverModal = () => ({
  type: actionTypes.CLOSE_DISCOVER_MODAL,
});



