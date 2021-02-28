import Card from "@material-ui/core/Card";
import Image from "next/image";
import { IRelease } from "../../lib/domain";
import { dateToYear } from "../../lib/utility";
import { AspectRatio } from "../@shared/aspect-ratio";
import { CardHeader, CardHeaderProps } from "../@shared/card-header";
import MusicNoteOutlinedIcon from "@material-ui/icons/MusicNoteOutlined";
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
        avatar={<MusicNoteOutlinedIcon />}
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
