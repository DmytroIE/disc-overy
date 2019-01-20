import * as selectors from "../redux/selectors";

export const formGatheredDataObject = state => {
  const inputType = selectors.getSelectedSource(state);
  const inputTypeData = selectors.getSources(state)[inputType];
  if (typeof inputTypeData === "object") {
    return {
      content: {
        inputType,
        ...inputTypeData,
        snmpConfig: {
          ...selectors.getSNMPObj(state)
        }
      }
    };
  }
  return {
    content: {
      inputType,
      data: inputTypeData,
      snmpConfig: {
        ...selectors.getSNMPObj(state)
      }
    }
  };
};
