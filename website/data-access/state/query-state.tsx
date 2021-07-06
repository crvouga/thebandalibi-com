import React from "react";
import {
  QueryClient,
  QueryClientProvider as DefaultQueryClientProvider,
  useQuery,
} from "react-query";
import { content } from "../content";

const queryClient = new QueryClient();

export const QueryClientProvider = ({
  children,
}: React.PropsWithChildren<{}>) => {
  return (
    <DefaultQueryClientProvider client={queryClient}>
      {children}
    </DefaultQueryClientProvider>
  );
};

export const useQuerySettings = () => {
  return useQuery(["settings"], () => content.settings.get(), {
    staleTime: Infinity,
  });
};
