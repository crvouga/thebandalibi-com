import { content } from "@data-access";
import { useQuery } from "react-query";

export const useEventsQuery = (
  ...params: Parameters<typeof content.event.getAll>
) => {
  return useQuery(["events", params], () => content.event.getAll(...params));
};

export const useEventQuery = ({ eventId }: { eventId: string }) => {
  return useQuery(["events", eventId], () => content.event.getOne({ eventId }));
};
