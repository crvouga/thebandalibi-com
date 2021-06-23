export type ISanityDateData = string;

export type ISanityImageData = {
  url: string;
  metadata: {
    dimensions: {
      aspectRatio: number;
      width: number;
      height: number;
    };
    palette: {
      dominant: {
        background: string;
        foreground: string;
      };
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
