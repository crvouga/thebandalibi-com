import Box from "@material-ui/core/Box";
import { CardHeader, Image } from "generic-components";

export const ImageCard = ({
  src,
  alt,
  title,
  subheader,
  orientation,
}: {
  src: string;
  alt: string;
  title: string;
  subheader: string;
  orientation: "vertical" | "horizontal";
}) => {
  if (orientation === "horizontal") {
    return (
      <Box width="100%" display="flex" alignItems="center">
        <Box width="50%">
          <Image aspectRatio={1} src={src} alt={alt} />
        </Box>
        <CardHeader title={title} subheader={subheader} />
      </Box>
    );
  }

  return (
    <Box width="100%" display="flex" alignItems="center" flexDirection="column">
      <Box width="100%">
        <Image aspectRatio={1} src={src} alt={alt} />
      </Box>
      <CardHeader title={title} subheader={subheader} />
    </Box>
  );
};
