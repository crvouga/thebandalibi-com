import { CancelablePromise } from "cancelable-promise";
import { useEffect, useState } from "react";

type IDimensions = {
  width: number;
  height: number;
};

type IImage = {
  src: string;
};

const promiseAll = <TData>(
  promises: CancelablePromise<TData>[]
): CancelablePromise<TData[]> => {
  return new CancelablePromise<TData[]>((resolve, reject) => {
    Promise.all(promises)
      .then((datas) => {
        resolve(datas);
      })
      .catch(reject);
  });
};

//source: https://stackoverflow.com/questions/623172/how-to-get-image-size-height-width-using-javascript
export const getImageWithDimensions = <TImage extends IImage>(
  imageData: TImage
): CancelablePromise<TImage & IDimensions> => {
  return new CancelablePromise<TImage & IDimensions>((resolve, reject) => {
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
    const promise = promiseAll(images.map(getImageWithDimensions));

    promise.then(setImagesWithDimensions);

    return () => {
      promise.cancel();
    };
  }, [images]);

  return imagesWithDimensions;
};
