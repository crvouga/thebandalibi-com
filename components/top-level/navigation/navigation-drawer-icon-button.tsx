import React from "react";
import IconButton from "@material-ui/core/IconButton";
import { MdMenu } from "react-icons/md";
import { useNavigationUiState } from "@data-access";

export const NavigationDrawerIconButton = () => {
  const navigationState = useNavigationUiState();

  const handleClick = () => {
    navigationState.setDrawerState("opened");
  };

  return (
    <IconButton aria-label="view navigation drawer" onClick={handleClick}>
      <MdMenu />
    </IconButton>
  );
};
