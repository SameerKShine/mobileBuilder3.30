import { useAuthenticatedFetch } from "./useAuthenticatedFetch";
import { useMemo } from "react";
import { useQuery } from "react-query";

export const useTest = ({ url, fetchInit = {}, reactQueryOptions }) => {
    console.log('enter here')
    const authenticatedFetch = useAuthenticatedFetch();
    const fetch = useMemo(() => {
      return async () => {
        const response = await authenticatedFetch(url, fetchInit);
        return response.json();
      };
    }, [url, JSON.stringify(fetchInit)]);
  
    return useQuery(url, fetch, {
      ...reactQueryOptions,
      refetchOnWindowFocus: false,
    });
  };