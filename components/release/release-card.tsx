import { IRelease } from "@data-access";
import { Theme, useMediaQuery } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import Card, { CardProps } from "@material-ui/core/Card";
import { CardHeader, Image } from "@ui";
import { dateToYear } from "@utility";

export const ReleaseArtworkCard = ({
  release,
  ...CardProps
}: { release: IRelease } & CardProps) => {
  return (
    <Card {...CardProps}>
      <Image aspectRatio={1} src={release.artwork} alt={release.artwork} />
    </Card>
  );
};

export const ReleaseCard = ({ release }: { release: IRelease }) => {
  return (
    <Box width="100%" display="flex" alignItems="center">
      <Box width="50%">
        <Image aspectRatio={1} src={release.artwork} alt={release.artwork} />
      </Box>
      <CardHeader
        title={release.title}
        subheader={dateToYear(release.releaseDate)}
      />
    </Box>
  );
};

export const HorizontalReleaseCard = ({ release }: { release: IRelease }) => {
  return (
    <Box width="100%" display="flex" alignItems="center">
      <Box width="50%">
        <Image aspectRatio={1} src={release.artwork} alt={release.artwork} />
      </Box>
      <CardHeader
        title={release.title}
        subheader={dateToYear(release.releaseDate)}
      />
    </Box>
  );
};

export const VerticalReleaseCard = ({ release }: { release: IRelease }) => {
  return (
    <Box width="100%" display="flex" alignItems="center" flexDirection="column">
      <Box width="100%">
        <Image aspectRatio={1} src={release.artwork} alt={release.artwork} />
      </Box>
      <CardHeader
        title={release.title}
        subheader={dateToYear(release.releaseDate)}
      />
    </Box>
  );
};

export const ResponsiveReleaseCard = ({ release }: { release: IRelease }) => {
  const isSmallScreen = useMediaQuery<Theme>((theme) =>
    theme.breakpoints.down("xs")
  );

  if (isSmallScreen) {
    return <HorizontalReleaseCard release={release} />;
  }

  return <VerticalReleaseCard release={release} />;
};
