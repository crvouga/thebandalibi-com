import { dataStore } from "@core";
import { useQuery } from "react-query";

export const createSettingsQueryKey = () => ["settings"];

export const useQuerySettings = () => {
  return useQuery(createSettingsQueryKey(), () => dataStore.settings.get(), {
    staleTime: Infinity,
  });
};
