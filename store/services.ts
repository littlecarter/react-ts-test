import { Observable, of, interval } from "rxjs";
import { map } from "rxjs/operators";
import { random } from "lodash";

import { IStock, ITrade, IStockService } from "./types";

export class StockService implements IStockService {
  private stockData = [
    { ric: "VOD.L", name: "Vodafone", min: 120, max: 125 },
    { ric: "BP.L", name: "BP", min: 270, max: 278 },
    { ric: "RDSa.L", name: "Shell", min: 150, max: 175 },
    { ric: "GSK", name: "GlaxoSmithKline", min: 550, max: 600 }
  ];

  //Return the stocks with a delay to simulate remote call
  getStocks = (): Observable<IStock[]> => of([]);

  getTradeStream(): Observable<ITrade> {
    return interval(300).pipe(
      map(_ => {
        const randomStock = this.stockData[random(this.stockData.length - 1)];
        return {
          dateTime: new Date(),
          stockRic: randomStock.ric,
          price: random(randomStock.min, randomStock.max),
          size: random(10, 100)
        };
      })
    );
  }
}
