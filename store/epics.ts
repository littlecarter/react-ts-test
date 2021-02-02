import { AnyAction } from "redux";
import { of } from "rxjs";
import { filter } from "rxjs/operators";
import { switchMap, map, catchError } from "rxjs/operators";
import {
  ActionsObservable,
  StateObservable,
  Epic,
  ofType
} from "redux-observable";

import { Actions, getStocksResultAction, newTradeAction } from "./actions";
import { IApplicationState, IEpicDependencies, IStockService } from "./types";

const getService = (epicDependencies: IEpicDependencies): IStockService =>
  epicDependencies.stockService;

export const getStocksEpic: Epic = (
  action$: ActionsObservable<AnyAction>,
  state$: StateObservable<IApplicationState>,
  dependencies: any
) =>
  action$.pipe(
    ofType(Actions.GET_STOCKS),
    switchMap(a =>
      getService(dependencies as IEpicDependencies)
        .getStocks()
        .pipe(
          map(stocks => getStocksResultAction(stocks, null)),
          catchError(error => of(getStocksResultAction(null, error)))
        )
    )
  );

export const getTradesEpic: Epic = (
  action$: ActionsObservable<AnyAction>,
  state$: StateObservable<IApplicationState>,
  dependencies: any
) =>
  action$.pipe(
    ofType(Actions.GET_STOCKS_RESULT),
    filter(a => Boolean(a.payload.stocks)),
    switchMap(a =>
      getService(dependencies as IEpicDependencies)
        .getTradeStream()
        .pipe(map(trade => newTradeAction(trade)))
    )
  );