export type IImage = {
  url: string;
  metadata: {
    dimensions: {
      width: number;
      height: number;
      aspectRatio: number;
    };
  };
};

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
