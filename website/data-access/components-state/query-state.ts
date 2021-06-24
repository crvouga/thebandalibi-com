import { content } from "../instances";
import { useQuery } from "react-query";

export const createSettingsQueryKey = () => ["settings"];

export const useQuerySettings = () => {
  return useQuery(createSettingsQueryKey(), () => content.settings.get(), {
    staleTime: Infinity,
  });
};
