import React, { useMemo } from "react";
import { useSelector } from "react-redux";

import Sheet from "./sheet";
import { ISheet, IApplicationState } from "../../store/types";

interface ISheetContainerProps {
  sheet: ISheet;
}

const SheetContainer: React.FC<ISheetContainerProps> = props => {
  const { sheet } = props;

  const trades = useSelector((state: IApplicationState) => state.trades);

  //1) Get the trades for the stock/sheet (same RIC)
  //2) Order the trades by dateTime - most recent at top
  //3) Extract only 10
  const filteredTrades = [];

  return <Sheet sheet={sheet} trades={filteredTrades} />;
};

export default SheetContainer;
