import { useQuery } from "react-query";
import { commerce, content } from "../instances";

export const useQuerySettings = () => {
  return useQuery(["settings"], () => content.settings.get(), {
    staleTime: Infinity,
  });
};

export const useQueryProducts = () => {
  return useQuery(["products"], () => commerce.products.getAll());
};
