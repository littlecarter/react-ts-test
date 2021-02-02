import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import App from "./app";
import { getStocksAction } from "../../store/actions";

const AppContainer: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getStocksAction());
  }, []);

  return <App />;
};

export default AppContainer;