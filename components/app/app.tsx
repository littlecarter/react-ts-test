import React from "react";
import { createStyles, withStyles, Theme } from "@material-ui/core/styles";

import ActionBarContainer from "../action-bar/action-bar-container";
import WorkspaceContainer from "../workspace/workspace-container";

interface IAppProps {
  classes: any;
}

const App: React.FC<IAppProps> = props => {
  const { classes } = props;

  return (
    <div className={classes.mainDiv}>
      <ActionBarContainer />
      <WorkspaceContainer />
    </div>
  );
};

const styles = (_: Theme) =>
  createStyles({
    mainDiv: {
      display: "flex",
      flexDirection: "column",
      flexGrow: 1
    }
  });

export default withStyles(styles)(App);