import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import { IPValidator, nonRelevantSymbolFinder, discoverModalTrigger } from "./middleware";

import rootReducer from "./reducers";

const middlewares = applyMiddleware(nonRelevantSymbolFinder, IPValidator, discoverModalTrigger);

const store = createStore(rootReducer, composeWithDevTools(middlewares));

export default store; 
