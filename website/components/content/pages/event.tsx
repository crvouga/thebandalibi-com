import { Button, Link } from "@components/generic";
import { IEventSort, content, IEvent, ISettings } from "@data-access";
import CircularProgress from "@material-ui/core/CircularProgress";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import React, { useState } from "react";
import { useQuery } from "react-query";
import { PageWrapper, routes } from "../../shared";

export type IEventProps = {
  settings: ISettings;
};

const useEventsQuery = ({ sort }: { sort: IEventSort }) => {
  return useQuery(
    ["events", sort],
    async () => {
      console.log({ sort });
      const data = await content.event.getAll({ sort });
      console.log({ data });
      return data;
    },
    {}
  );
};

const Loading = () => {
  return <CircularProgress />;
};

const Loaded = ({ events }: { events: IEvent[] }) => {
  return (
    <>
      <List>
        {events.map((event) => (
          <ListItem>
            <ListItemText primary={event.name} />
          </ListItem>
        ))}
      </List>
    </>
  );
};

export const Event = (props: IEventProps) => {
  const { settings } = props;

  const [sort, setSort] = useState<IEventSort>("date-descend");

  const eventsQuery = useEventsQuery({
    sort,
  });

  return (
    <PageWrapper pageTitle={["Events"]} settings={settings}>
      <Container sx={{ paddingY: 2 }}>
        <Breadcrumbs>
          <Link href={routes.landing()}>Home</Link>
          <Link href={routes.allImageGalleries()} color="text.primary">
            Events
          </Link>
        </Breadcrumbs>

        <Typography variant="h1" color="initial">
          Events
        </Typography>
      </Container>

      <Button
        fullWidth
        variant="contained"
        loading={eventsQuery.status === "loading"}
        onClick={() => {
          setSort((sort) => {
            if (sort === "date-ascend") {
              return "date-descend";
            }
            return "date-ascend";
          });
          eventsQuery.refetch();
        }}
      >
        Toggle {sort}
      </Button>

      <Container disableGutters>
        {!eventsQuery.data && <Loading />}
        {eventsQuery.data && <Loaded events={eventsQuery.data} />}
      </Container>
    </PageWrapper>
  );
};
