import Box from "@material-ui/core/Box";
import Card, { CardProps } from "@material-ui/core/Card";
import Image from "next/image";
import { IRelease } from "@core";
import { dateToYear } from "../../lib/utility";
import { AspectRatio } from "../shared/aspect-ratio";
import { CardHeader } from "../shared/card-header";

export const ReleaseArtworkCard = ({
  release,
  ...CardProps
}: { release: IRelease } & CardProps) => {
  return (
    <Card {...CardProps}>
      <AspectRatio ratio={[1, 1]}>
        <Image layout="fill" src={release.artwork} alt={release.title} />
      </AspectRatio>
    </Card>
  );
};

export const ReleaseCard = ({ release }: { release: IRelease }) => {
  return (
    <Box width="100%" display="flex" alignItems="center">
      <Box width="50%">
        <AspectRatio ratio={1}>
          <Image layout="fill" src={release.artwork} alt={release.artwork} />
        </AspectRatio>
      </Box>
      <CardHeader
        title={release.title}
        subheader={dateToYear(release.releaseDate)}
      />
    </Box>
  );
};
