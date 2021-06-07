import Box, { BoxProps } from "@material-ui/core/Box";
import Image from "next/image";
import { AspectRatio } from "./AspectRatio";

export const AlbumArtwork = ({
  src,
  title,
  ...boxProps
}: BoxProps & { src: string; title: string }) => {
  return (
    <Box {...boxProps}>
      <AspectRatio ratio={1 / 1}>
        <Image layout="fill" src={src} alt={title} />
      </AspectRatio>
    </Box>
  );
};
