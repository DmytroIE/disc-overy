export const validateIPAddress = address => {
  return address.match(
    /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/
  );
};

export const findNonRelevantSymbol = address => {
  const match = address.match(/[^\d.]+/);
  return !!match;
};

export const validateIPAddressRange = (startAddress, endAddress) => {
  const startMatch = startAddress.match(/^(\d+)\.(\d+)\.(\d+)\.(\d+)$/);
  const endMatch = endAddress.match(/^(\d+)\.(\d+)\.(\d+)\.(\d+)$/);
  if (startMatch == null || endMatch == null) {
    return false;
  }

  const startAddrNum =
    ((+startMatch[1] * 1000 + +startMatch[2]) * 1000 + +startMatch[3]) * 1000 +
    +startMatch[4];
  const endAddrNum =
    ((+endMatch[1] * 1000 + +endMatch[2]) * 1000 + +endMatch[3]) * 1000 +
    +endMatch[4];

  const e = startAddrNum < endAddrNum;
  return e;
};

export const validateStartingIPAddress = (startAddress, endAddress) => {
  if (!validateIPAddress(startAddress)) {
    return false;
  }
  if (!validateIPAddress(endAddress)) {
    return true;
  }
  return validateIPAddressRange(startAddress, endAddress);
};

export const validateEndingIPAddress = (startAddress, endAddress) => {
  if (!validateIPAddress(endAddress)) {
    return false;
  }
  if (!validateIPAddress(startAddress)) {
    return true;
  }
  return validateIPAddressRange(startAddress, endAddress);
};
