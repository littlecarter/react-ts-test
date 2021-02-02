import { action } from "typesafe-actions";

import { IStock, ITrade } from "./types";

export enum Actions {
  GET_STOCKS = "@Actions/GET_STOCKS",
  GET_STOCKS_RESULT = "@Actions/GET_STOCKS_RESULT",
  NEW_TRADE = "@Actions/NEW_TRADE",
  STOCK_SELECTED = "@Actions/STOCK_SELECTED",
  SHEET_SELECTED = "@Actions/SHEET_SELECTED",
  SHEET_CLOSED = "@Actions/SHEET_CLOSED"
}

export const getStocksAction = () => action(Actions.GET_STOCKS);

export const getStocksResultAction = (
  stocks: IStock[] | null,
  error: string | null
) => action(Actions.GET_STOCKS_RESULT, { stocks, error });

export const newTradeAction = (trade: ITrade) =>
  action(Actions.NEW_TRADE, trade);

export const stockSelectedAction = (stock: IStock) =>
  action(Actions.STOCK_SELECTED, stock);

export const sheetSelectedAction = (sheetId: string) =>
  action(Actions.SHEET_SELECTED, sheetId);

export const sheetClosedAction = (sheetId: string) =>
  action(Actions.SHEET_CLOSED, sheetId);