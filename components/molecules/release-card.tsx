import Card from "@material-ui/core/Card";
import Image from "next/image";
import { IRelease } from "../../lib/domain";
import { dateToYear } from "../../lib/utility";
import { AspectRatio } from "../atoms/aspect-ratio";
import { CardHeader, CardHeaderProps } from "../atoms/card-header";

export const ReleaseArtworkCard = ({ release }: { release: IRelease }) => {
  return (
    <Card>
      <AspectRatio ratio={[1, 1]}>
        <Image layout="fill" src={release.artwork} alt={release.title} />
      </AspectRatio>
    </Card>
  );
};

export const ReleaseCard = ({
  release,
  CardHeaderProps,
}: {
  release: IRelease;
  CardHeaderProps?: CardHeaderProps;
}) => {
  return (
    <Card>
      <CardHeader
        title={release.title}
        subheader={dateToYear(release.releaseDate)}
        titleTypographyProps={{ noWrap: true }}
        {...CardHeaderProps}
      />
      <AspectRatio ratio={[1, 1]}>
        <Image layout="fill" src={release.artwork} alt={release.artwork} />
      </AspectRatio>
    </Card>
  );
};
