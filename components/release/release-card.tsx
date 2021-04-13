import Card, { CardProps } from "@material-ui/core/Card";
import Image from "next/image";
import { IRelease } from "../../lib/data-access";
import { dateToYear } from "../../lib/utility";
import { AspectRatio } from "../shared/aspect-ratio";
import { CardHeader, CardHeaderProps } from "../shared/card-header";

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

export const ReleaseCard = ({
  release,
  CardHeaderProps,
}: {
  release: IRelease;
  CardHeaderProps?: CardHeaderProps;
}) => {
  return (
    <Card>
      <AspectRatio ratio={[1, 1]}>
        <Image layout="fill" src={release.artwork} alt={release.artwork} />
      </AspectRatio>
      <CardHeader
        title={release.title}
        subheader={dateToYear(release.releaseDate)}
        titleTypographyProps={{ noWrap: true }}
        {...CardHeaderProps}
      />
    </Card>
  );
};
