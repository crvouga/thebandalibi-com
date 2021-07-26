import React from "react";
import IconButton from "@material-ui/core/IconButton";
import { MdMenu } from "react-icons/md";
import { appEventEmitter } from "../app";

export const OpenNavDrawerButton = () => {
  const handleClick = () => {
    appEventEmitter.emit("open-navigation", {});
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
