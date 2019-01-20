export const getCurrentStep = state => state.currentStep;

export const getSelectedSource = state => state.source.selectedSource;

export const getSources = state => state.source.sources;
export const getIPAddress = state => state.source.sources.IP.address;
export const getIPAddressStatus = state =>
  state.source.sources.IP.isCorrect;

export const getStartingIPAddress = state =>
  state.source.sources.IPRange.startingIPAddress.startingAddress;
export const getStartingIPAddressStatus = state =>
  state.source.sources.IPRange.startingIPAddress.isCorrect;

export const getEndingIPAddress = state =>
  state.source.sources.IPRange.endingIPAddress.endingAddress;
export const getEndingIPAddressStatus = state =>
  state.source.sources.IPRange.endingIPAddress.isCorrect;

export const getCSVPath = state => state.source.sources.CSVFile;

export const getSNMPSelection = state =>
  state.options.optionsSelectionStatus.SNMPSelected;
export const getLinkSelection = state =>
  state.options.optionsSelectionStatus.LinkSelected;
export const getVLANSelection = state =>
  state.options.optionsSelectionStatus.VLANSelected;
export const getPortsSelection = state =>
  state.options.optionsSelectionStatus.PortsSelected;
export const getAnyOptionSelected = state =>
  getSNMPSelection(state) ||
  getLinkSelection(state) ||
  getVLANSelection(state) ||
  getPortsSelection(state);

export const getSNMPObj = state => state.options.SNMP;
export const getSNMPVersion = state => state.options.SNMP.version;
export const getReadCommunity = state => state.options.SNMP.SNMPv3.readCommunity;

export const getSecurityOption  = state => state.options.SNMP.SNMPv3.securityOptions;
export const getContextName = state => state.options.SNMP.SNMPv3.contextName;
export const getContextEngineID = state => state.options.SNMP.SNMPv3.contextEngineID;
export const getAuthenticationCode = state => state.options.SNMP.SNMPv3.authenticationAlgorithm.code;
export const getAuthenticationPassword = state => state.options.SNMP.SNMPv3.authenticationAlgorithm.password;

export const getDiscoverModalStatus = state => state.discoverModalStatus;
