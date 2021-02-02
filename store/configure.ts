import { applyMiddleware, createStore } from "redux";
import { createEpicMiddleware, combineEpics } from "redux-observable";
import { composeWithDevTools } from "redux-devtools-extension";

import { IEpicDependencies } from "./types";
import { StockService } from "./services";
import { applicationReducer } from "./reducers";
import { getStocksEpic, getTradesEpic } from "./epics";

const configureStore = () => {
  const dependencies: IEpicDependencies = { stockService: new StockService() };
  const epicMiddleware = createEpicMiddleware({ dependencies });

  const store = createStore(
    applicationReducer,
    composeWithDevTools(applyMiddleware(epicMiddleware))
  );

  const epics = combineEpics(getStocksEpic, getTradesEpic);

  epicMiddleware.run(epics);

  return store;
};

export default configureStore;