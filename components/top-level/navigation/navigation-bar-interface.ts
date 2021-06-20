import React from "react";

export type INavigationBarProps = {
  logo: React.ReactNode;
  links: { pathname: string; label: string }[];
};
