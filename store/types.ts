import { Observable } from "rxjs";

export interface IStockService {
  getStocks(): Observable<IStock[]>;
  getTradeStream(): Observable<ITrade>;
}

export interface IStock {
  ric: string;
  name: string;
}

export interface ITrade {
  stockRic: string;
  price: number;
  size: number;
  dateTime: Date;
}

export interface ISheet {
  id: string;
  name: string;
  stockRic: string;
}

export interface IWorkspaceState {
  sheets: ISheet[];
  selectedSheetId: string | null;
}

export interface IApplicationState {
  stocks: IStock[];
  stocksError: string | null;
  stocksLoading: boolean;
  workspace: IWorkspaceState;
  trades: ITrade[];
}

export interface IEpicDependencies {
  stockService: IStockService;
}