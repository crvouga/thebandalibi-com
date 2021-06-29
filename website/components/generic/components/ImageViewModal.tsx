import React from "react";
import { PhotoSwipe } from "react-photoswipe";
import "react-photoswipe/lib/photoswipe.css";

export const ImageViewModal = ({
  startIndex,
  images,
  open,
  onClose,
  onChange,
}: {
  open: boolean;
  onClose?: () => void;
  images: { src: string; width: number; height: number }[];
  startIndex?: number;
  onChange?: ({ index }: { index: number }) => void;
}) => {
  const photoswipeItems = images.map((image) => ({
    src: image.src,
    w: image.width,
    h: image.height,
  }));

  const handleChange = (photoswipe: unknown) => {
    // console.log({ photoswipe })

    //@ts-ignore
    const index = photoswipe?.getCurrentIndex?.();

    if (typeof index !== "number") {
      return;
    }

    onChange?.({ index });
  };

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
      beforeChange={handleChange}
    />
  );
};
