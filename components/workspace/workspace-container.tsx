import React from "react";
import { useDispatch, useSelector } from "react-redux";

import Workspace from "./workspace";
import { IApplicationState } from "../../store/types";
import { sheetSelectedAction, sheetClosedAction } from '../../store/actions';

export interface IWorkspaceContainerProps {}

const WorkspaceContainer: React.FC<IWorkspaceContainerProps> = props => {    
  const dispatch = useDispatch();
  const sheets = useSelector((state: IApplicationState) => state.workspace.sheets);
  const selectedSheetId = useSelector((state: IApplicationState) => state.workspace.selectedSheetId);

  return (
    <Workspace sheets={sheets} 
               selectedSheetId={selectedSheetId} 
               onSheetSelected={sheet => dispatch(sheetSelectedAction(sheet.id))}
               onSheetClosed={sheet => dispatch(sheetClosedAction(sheet.id))} 
    />      
  );
};

export default WorkspaceContainer;