import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
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

const Music = (props: IMusicProps) => {
  const { tracklists } = props;

  return (
    <PageLayout>
      <Meta title="Music | Alibi" />
      <Typography variant="h1" color="initial">
        Music
      </Typography>
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
