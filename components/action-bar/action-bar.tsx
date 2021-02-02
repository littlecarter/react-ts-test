import React, { useEffect, useState } from "react";
import { createStyles, withStyles, Theme } from "@material-ui/core/styles";
import { Toolbar, Select, MenuItem, LinearProgress } from "@material-ui/core";

import { IStock } from "../../store/types";

interface IActionBarProps {
  classes: any;  
  stocks: IStock[];
  stocksLoading: boolean;
  onStockSelected: (stock: IStock) => void;
}

const ActionBar: React.FC<IActionBarProps> = (props) => {
  const { classes, stocks, onStockSelected, stocksLoading } = props;

  const [selectedStock, setSelectedStock] = useState<IStock | null>(null);

  useEffect(() => {
    if (selectedStock) {
      onStockSelected(selectedStock);
    }
  }, [selectedStock]);

  useEffect(() => {
    if (stocks.length) {
      setSelectedStock(stocks[0]);
    }
  }, [stocks]);  

  if (stocksLoading) {
    return <LinearProgress />;
  }

  return (
    <Toolbar className={classes.toolbar}>
      <Select
        value={selectedStock ? selectedStock.name : ""}
        renderValue={(_) => selectedStock?.name}
        onChange={(event: any) => {
          setSelectedStock(stocks.find((x) => x.name === event.target.value) as IStock);
        }}
      >
        {stocks.map((x) => (
          <MenuItem key={x.ric} value={x.name}>
            {x.name}
          </MenuItem>
        ))}
      </Select>
    </Toolbar>
  );
};

const styles = (theme: Theme) =>
  createStyles({    
    toolbar: {
      background: theme.palette.background.paper,
      borderBottom: `1px solid ${theme.palette.grey[300]}`,
    },
  });

export default withStyles(styles)(ActionBar);