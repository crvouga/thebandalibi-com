import React from "react";
import IconButton from "@material-ui/core/IconButton";
import { MdMenu } from "react-icons/md";
import { useNavigationUi } from "@data-access";

export const OpenNavigationDrawerButton = () => {
  const navigationUi = useNavigationUi();

  const handleClick = () => {
    navigationUi.setStatus("opened");
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
