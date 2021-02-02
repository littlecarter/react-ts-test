import { Reducer, AnyAction } from "redux";
import { produce } from "immer";
import { v4 as uuid } from "uuid";

import { IApplicationState, IWorkspaceState } from "./types";
import { Actions } from "./actions";

const TradeCountMax = 2500;

export const initialWorkspaceState: IWorkspaceState = {
  sheets: [],
  selectedSheetId: null
};

export const initialApplicationState: IApplicationState = {
  stocks: [],
  stocksError: null,
  stocksLoading: false,
  trades: [],
  workspace: initialWorkspaceState
};

export const applicationReducer: Reducer<IApplicationState> = (
  appState = initialApplicationState,
  action: AnyAction
): IApplicationState => {
  const state = {
    ...appState,
    workspace: workspaceReducer(appState.workspace, action)
  };

  switch (action.type) {
    //case Actions.GET_STOCKS: {
    //Handle stocksLoading
    //}

    case Actions.GET_STOCKS_RESULT: {
      const { stocks, error } = action.payload;
      return { ...state, stocks, stocksError: error };
    }

    case Actions.NEW_TRADE: {
      return produce(state, draft => {
        if (state.trades.length + 1 === TradeCountMax) {
          console.log("Trade count limit reached - clearing cache");
          draft.trades = [];
        } else {
          draft.trades.push({ ...action.payload });
        }
      });
    }
  }

  return state;
};

export const workspaceReducer: Reducer<IWorkspaceState> = (
  state = initialWorkspaceState,
  action: AnyAction
): IWorkspaceState => {
  const sheetIndex = (id: string) => state.sheets.findIndex(x => x.id === id);

  switch (action.type) {
    case Actions.STOCK_SELECTED: {
      return produce(state, draft => {
        const stock = action.payload;
        const id = uuid();
        draft.sheets.push({ id, name: stock.name, stockRic: stock.ric });
        draft.selectedSheetId = id;
      });
    }

    case Actions.SHEET_SELECTED: {
      return { ...state, selectedSheetId: action.payload };
    }

    case Actions.SHEET_CLOSED: {
      return produce(state, draft => {
        const index = sheetIndex(action.payload);
        const isSelected = state.sheets[index].id === state.selectedSheetId;

        //Remove the sheet at the index
        //If the sheet being removed is currently selected, take that into account
      });
    }
  }

  return state;
};
