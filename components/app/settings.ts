import { useQuery } from "react-query";
import { dataStore } from "../../lib/data-access";

export const createSettingsQueryKey = () => ["settings"];

export const useQuerySettings = () => {
  return useQuery(createSettingsQueryKey(), () => dataStore.settings.get(), {
    staleTime: Infinity,
  });
};
