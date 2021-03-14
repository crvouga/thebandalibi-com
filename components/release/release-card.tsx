import Card, { CardProps } from "@material-ui/core/Card";
import Image from "next/image";
import { IRelease } from "../../lib/data-access";
import { dateToYear } from "../../lib/utility";
import { AspectRatio } from "../shared/aspect-ratio";
import { CardHeader, CardHeaderProps } from "../shared/card-header";
import { ReleaseIcon } from "../shared/icons";

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
      <CardHeader
        avatar={<ReleaseIcon />}
        title={release.title}
        subheader={dateToYear(release.releaseDate)}
        titleTypographyProps={{ variant: "h6", noWrap: true }}
        {...CardHeaderProps}
      />
      <AspectRatio ratio={[1, 1]}>
        <Image layout="fill" src={release.artwork} alt={release.artwork} />
      </AspectRatio>
    </Card>
  );
};
