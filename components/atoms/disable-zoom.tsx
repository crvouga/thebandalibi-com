import Head from "next/head";
import React from "react";

export const DisableZoom = () => {
  return (
    <Head>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, shrink-to-fit=no"
      />
    </Head>
  );
};
