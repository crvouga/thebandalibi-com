import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { GetStaticProps } from "next";
import { PageLayout } from "../components/layout";
import { Meta } from "../components/meta";
import { ITracklist } from "../lib/contracts";
import { datastore } from "../lib/datastore";

type IMusicProps = {
  tracklists: ITracklist[];
};

export const getStaticProps: GetStaticProps<IMusicProps> = async () => {
  return {
    props: {
      tracklists: await datastore.tracklist.getAll(),
    },
  };
};
const useStyles = makeStyles(() => ({
  spotify: {
    width: "100%",
    height: "360px",
  },
}));

const Music = (props: IMusicProps) => {
  const { tracklists } = props;
  const classes = useStyles();

  return (
    <PageLayout>
      <Meta title="Music | Alibi" />

      <Typography variant="h3" gutterBottom>
        Find Us On Spotify
      </Typography>

      <iframe
        className={classes.spotify}
        src="https://open.spotify.com/embed/artist/1dPvz0D6q1WWfNnrORE3RU"
        frameBorder="0"
        allow="encrypted-media"
      />

      <List>
        {tracklists.map((tracklist) => (
          <ListItem key={tracklist.id}>
            <ListItemText primary={tracklist.title} />
          </ListItem>
        ))}
      </List>
    </PageLayout>
  );
};

export default Music;
