import { contentDataStore } from "./implementation";
import { useQuery } from "react-query";

export const createSettingsQueryKey = () => ["settings"];

export const useQuerySettings = () => {
  return useQuery(
    createSettingsQueryKey(),
    () => contentDataStore.settings.get(),
    {
      staleTime: Infinity,
    }
  );
};
