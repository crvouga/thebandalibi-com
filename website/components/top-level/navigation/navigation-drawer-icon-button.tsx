import React from "react";
import IconButton from "@material-ui/core/IconButton";
import { MdMenu } from "react-icons/md";
import { useUiState } from "@data-access";

export const NavigationDrawerIconButton = () => {
  const uiState = useUiState();

  const handleClick = () => {
    uiState.setState("navigation-opened");
  };

  return (
    <IconButton
      color="inherit"
      aria-label="view navigation drawer"
      onClick={handleClick}
    >
      <MdMenu />
    </IconButton>
  );
};
