import NextImage from "next/image";
import { IImage } from "../../lib/domain";
import { AspectRatio } from "./aspect-ratio";

export const Image = (props: { image: IImage; alt: string }) => {
  const { image, alt } = props;
  return (
    <AspectRatio ratio={[image.metadata.dimensions.aspectRatio, 1]}>
      <NextImage layout="fill" src={image.url} alt={alt} />
    </AspectRatio>
  );
};
