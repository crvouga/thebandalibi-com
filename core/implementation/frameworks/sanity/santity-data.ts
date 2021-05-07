export type ISanityImageData = {
  url: string;
  metadata: {
    dimensions: {
      aspectRatio: number;
      width: number;
      height: number;
    };
  };
};

export type ISanityVideoData = {
  name: string;
  url: string;
  tags: {
    name: string;
    slug: string;
    videoCount: number;
  }[];
}[];

export type ISanityPlatformData = {
  name: string;
  url: string;
};
