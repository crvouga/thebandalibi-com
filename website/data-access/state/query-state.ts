import { useQuery } from "react-query";
import { content } from "../content";

export const useQuerySettings = () => {
  return useQuery(["settings"], () => content.settings.get(), {
    staleTime: Infinity,
  });
};
