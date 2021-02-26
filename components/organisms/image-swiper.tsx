import React from "react";
import { PhotoSwipe } from "react-photoswipe";
import "react-photoswipe/lib/photoswipe.css";
import { IImage } from "../../lib/contracts";

export const ImageSwiper = (props: {
  open: boolean;
  onClose?: () => void;
  images: IImage[];
  startIndex?: number;
}) => {
  const { startIndex, images, open, onClose } = props;

  const photoswipeItems = images.map((image) => ({
    src: image.url,
    w: image.metadata.dimensions.width,
    h: image.metadata.dimensions.height,
  }));

  return (
    //docs: https://github.com/minhtranite/react-photoswipe
    <PhotoSwipe
      options={{
        //docs: https://photoswipe.com/documentation/options.html
        index: startIndex,
        pinchToClose: false,
      }}
      isOpen={open}
      items={photoswipeItems}
      onClose={onClose}
    />
  );
};
