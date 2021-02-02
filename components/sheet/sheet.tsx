import React, { useState, useEffect } from "react";
import { createStyles, withStyles, Theme } from "@material-ui/core/styles";
import { AgGridReact, AgGridColumn } from "ag-grid-react";
//import "ag-grid-community/dist/styles/ag-theme.balham.css";
import "ag-grid-community/dist/styles/ag-grid.css";
import moment from "moment";

import { ISheet, ITrade } from "../../store/types";

export interface ISheetProps {
  classes: any;
  sheet: ISheet;
  trades: ITrade[];
}

const Sheet: React.FC<ISheetProps> = props => {
  const { classes, sheet, trades } = props;

  return (
    <div className={classes.mainDiv}>
      <AgGridReact rowData={trades}>
        <AgGridColumn field="stockRic" headerName="RIC" />
        <AgGridColumn
          field="dateTime"
          headerName="Time"
          valueFormatter={params =>
            moment(params.value as Date).format("HH:mm:ss:ms")
          }
        />
        <AgGridColumn field="price" headerName="Price" />
        <AgGridColumn field="size" headerName="Size" />
      </AgGridReact>
    </div>
  );
};

const styles = (theme: Theme) =>
  createStyles({
    mainDiv: {
      flexGrow: 1,
      margin: 8,
      border: `1px solid ${theme.palette.grey.A100}`
    }
  });

export default withStyles(styles)(Sheet);
