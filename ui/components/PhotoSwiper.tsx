import React from "react";
import { PhotoSwipe } from "react-photoswipe";
import "react-photoswipe/lib/photoswipe.css";

export const PhotoSwiper = (props: {
  open: boolean;
  onClose?: () => void;
  images: { src: string; width: number; height: number }[];
  startIndex?: number;
}) => {
  const { startIndex, images, open, onClose } = props;

  const photoswipeItems = images.map((image) => ({
    src: image.src,
    w: image.width,
    h: image.height,
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
