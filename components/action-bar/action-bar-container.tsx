import React from "react";
import { useDispatch, useSelector } from "react-redux";

import ActionBar from "./action-bar";
import { stockSelectedAction } from "../../store/actions";
import { IApplicationState, IStock } from "../../store/types";

const ActionBarContainer: React.FC = () => {
  const dispatch = useDispatch();
  const stocks = useSelector((state: IApplicationState) => state.stocks);
  const stocksLoading = useSelector(
    (state: IApplicationState) => state.stocksLoading
  );

  return (
    <ActionBar
      stocks={stocks}
      stocksLoading={stocksLoading}
      onStockSelected={(stock: IStock) => dispatch(stockSelectedAction(stock))}
    />
  );
};

export default ActionBarContainer;