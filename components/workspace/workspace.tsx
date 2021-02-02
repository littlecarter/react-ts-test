import React, { useMemo } from "react";
import { Typography, Tab, Tabs, IconButton } from "@material-ui/core";
import { createStyles, withStyles, Theme } from "@material-ui/core/styles";
import CloseIcon from "@material-ui/icons/Close";

import { ISheet } from "../../store/types";
import SheetContainer from "../sheet/sheet-container";

export interface IWorkspaceProps {
  classes: any;
  theme: Theme;
  sheets: ISheet[];
  selectedSheetId: string | null;
  onSheetSelected: (sheet: ISheet) => void;
  onSheetClosed: (sheet: ISheet) => void;
}

const Workspace: React.FC<IWorkspaceProps> = props => {
  const {
    classes,
    sheets,
    selectedSheetId,
    onSheetSelected,
    onSheetClosed
  } = props;

  const selectedSheet = useMemo(() => {
    return selectedSheetId ? sheets.find(x => x.id === selectedSheetId) : null;
  }, [selectedSheetId]);

  const renderTabs = () => {
    return (
      <Tabs value={selectedSheetId}>
        {sheets.map(x => {
          const label = () => {
            return (
              <div className={classes.tabLabelDiv}>
                <Typography align="center">{x.name}</Typography>
                <IconButton color="inherit" size="small">
                  <CloseIcon
                    className={classes.closeIcon}
                    onClick={e => {
                      e.stopPropagation();
                      onSheetClosed(x);
                    }}
                  />
                </IconButton>
              </div>
            );
          };
          return (
            <Tab
              key={x.id}
              label={label()}
              value={x.id}
              onClick={() => onSheetSelected(x)}
            />
          );
        })}
      </Tabs>
    );
  };

  const renderSelectedSheet = () => {
    if (!selectedSheet) {
      return null;
    }
    //*** Return new SheetContainer
  };

  return (
    <div className={classes.workspaceDiv}>
      {renderTabs()}
      {renderSelectedSheet()}
    </div>
  );
};

const styles = (theme: Theme) =>
  createStyles({
    tabLabelDiv: {
      display: "flex",
      flexDirection: "row"
    },
    closeIcon: {
      height: 18,
      width: 18,
      marginLeft: 5
    },
    workspaceDiv: {
      display: "flex",
      flexDirection: "column",
      flexGrow: 1
    }
  });

export default withStyles(styles, { withTheme: true })(Workspace);
