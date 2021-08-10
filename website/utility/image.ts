//source: https://stackoverflow.com/questions/623172/how-to-get-image-size-height-width-using-javascript

import { useEffect, useState } from "react";

type IDimensions = {
  width: number;
  height: number;
};

type IImage = {
  src: string;
};

export const getImageWithDimensions = async <TImage extends IImage>(
  imageData: TImage
) => {
  return new Promise<TImage & IDimensions>((resolve, reject) => {
    const image = new Image();

    image.onload = () => {
      resolve({
        ...imageData,
        width: image.naturalWidth,
        height: image.naturalHeight,
      });
    };

    image.onerror = () => {
      reject(new Error("There was some problem with the image."));
    };

    image.src = imageData.src;
  });
};

export const useImagesWithDimensions = <TImage extends IImage>(
  images: TImage[]
) => {
  const [imagesWithDimensions, setImagesWithDimensions] = useState<
    (TImage & IDimensions)[]
  >([]);

  useEffect(() => {
    Promise.all(images.map(getImageWithDimensions)).then(
      setImagesWithDimensions
    );
  }, [images]);

  return imagesWithDimensions;
};
