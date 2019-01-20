import {
  getStartingIPAddress,
  getEndingIPAddress,
} from "./selectors";

import { steps } from "../configs/configs";

import {
  validateIPAddress,
  validateStartingIPAddress,
  validateEndingIPAddress,
  findNonRelevantSymbol
} from "../utils/validate";

import * as actionTypes from "./actionTypes";
import * as actions from "./actions";

const IPValidator = store => next => action => {
  next(action);

  switch (action.type) {
    case actionTypes.CHANGE_IP:
      const isIPValid = validateIPAddress(action.payload);
      store.dispatch(actions.changeIPstatus(isIPValid));
      // simplier variant (if you don't want to provide possibility of returning back to the step 1 in future)
      if (isIPValid) {
        store.dispatch(actions.goToTheStep(steps.OPTIONS));
      }
      break;

    case actionTypes.CHANGE_STARTING_IP:
      const endingIPAddress = getEndingIPAddress(store.getState());
      const isStartingIPValid = validateStartingIPAddress(
        action.payload,
        endingIPAddress
      );
      store.dispatch(actions.changeStartingIPstatus(isStartingIPValid));
      //--
      if (isStartingIPValid) {
        const ending = validateEndingIPAddress(action.payload, endingIPAddress);
        store.dispatch(actions.changeEndingIPstatus(ending));
        if (ending) {
          store.dispatch(actions.goToTheStep(steps.OPTIONS));
        }
      }
      break;
    case actionTypes.CHANGE_ENDING_IP:
      const startingIPAddress = getStartingIPAddress(store.getState());
      const isEndingIPValid = validateEndingIPAddress(
        startingIPAddress,
        action.payload
      );
      store.dispatch(actions.changeEndingIPstatus(isEndingIPValid));
      //--
      if (isEndingIPValid) {
        const starting = validateStartingIPAddress(
          startingIPAddress,
          action.payload
        );
        store.dispatch(actions.changeStartingIPstatus(starting));
        if (starting) {
          store.dispatch(actions.goToTheStep(steps.OPTIONS)); // Not good
        }
      }
      break;
    default: // just because of linter
  }
};

const nonRelevantSymbolFinder = store => next => action => {
  switch (action.type) {
    case actionTypes.CHANGE_IP:
    case actionTypes.CHANGE_STARTING_IP:
    case actionTypes.CHANGE_ENDING_IP:
      if (findNonRelevantSymbol(action.payload)) {
        return;
      }
    break; // just because of linter
    default: // just because of linter
  }

  next(action);
};

const discoverModalTrigger = store => next => action => {
  next(action);
  if (action.type !== actionTypes.GO_TO_THE_STEP) {
    return;
  }
  if (action.payload === steps.INPUT_DATA) {
    store.dispatch(actions.openDiscoverModal());
  }
};

export { IPValidator, nonRelevantSymbolFinder, discoverModalTrigger };
