import { content, IEventSort } from "@data-access";
import { useQuery } from "react-query";

export const useEventsQuery = ({ sort }: { sort: IEventSort }) => {
  return useQuery(["events", sort], () => content.event.getAll({ sort }));
};
