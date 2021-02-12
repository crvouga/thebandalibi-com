import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { makeStyles } from "@material-ui/core/styles";
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
  return (
    <PageLayout>
      <Meta title="Music | Alibi" />

      <List>
        {tracklists.map((tracklist) => (
          <div key={tracklist.id}>
            <ListItem>
              <ListItemText
                primaryTypographyProps={{ variant: "h5" }}
                primary={tracklist.title}
              />
            </ListItem>
            <List>
              {tracklist.tracks.map((track) => (
                <ListItem>
                  <ListItemText primary={track.title} />
                </ListItem>
              ))}
            </List>
          </div>
        ))}
      </List>
    </PageLayout>
  );
};

export default Music;
