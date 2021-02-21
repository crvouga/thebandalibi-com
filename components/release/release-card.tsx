import { Button, CardActions } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import MusicNoteIcon from "@material-ui/icons/MusicNote";
import Image from "next/image";
import { IRelease } from "../../lib/contracts";
import { dateToYear } from "../../lib/utility";
import { AspectRatio } from "../aspect-ratio";
export const ReleaseArtworkCard = ({ release }: { release: IRelease }) => {
  return (
    <Card>
      <AspectRatio ratio={[1, 1]}>
        <Image layout="fill" src={release.artwork} alt={release.title} />
      </AspectRatio>
    </Card>
  );
};

export const ReleaseCard = ({ release }: { release: IRelease }) => {
  return (
    <Card>
      <CardHeader
        title={release.title}
        subheader={dateToYear(release.releaseDate)}
      />

      <AspectRatio ratio={[1, 1]}>
        <Image layout="fill" src={release.artwork} alt={release.artwork} />
      </AspectRatio>
      <CardActions>
        <Button
          startIcon={<MusicNoteIcon />}
          fullWidth
          size="large"
          variant="contained"
          href={release.url}
        >
          Listen Now
        </Button>
      </CardActions>
    </Card>
  );
};
