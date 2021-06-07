import Card, { CardProps } from "@material-ui/core/Card";
import Image from "next/image";
import { AspectRatio } from "./AspectRatio";

export const AlbumArtwork = ({
  src,
  title,
  ...CardProps
}: CardProps & { src: string; title: string }) => {
  return (
    <Card {...CardProps}>
      <AspectRatio ratio={[1, 1]}>
        <Image layout="fill" src={src} alt={title} />
      </AspectRatio>
    </Card>
  );
};
