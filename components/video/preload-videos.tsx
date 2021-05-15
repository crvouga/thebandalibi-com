import Head from "next/head";
import React from "react";

export const PreloadVideos = ({ videoUrls }: { videoUrls: string[] }) => {
  return (
    <Head>
      {videoUrls.map((videoUrl) => (
        <link key={videoUrl} rel="preload" as="video" href={videoUrl} />
      ))}
    </Head>
  );
};
