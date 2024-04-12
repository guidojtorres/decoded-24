import { useCallback, useEffect, useState } from "react";
import { StrapiResponseType } from "./types";

export default function useFetchedData(url: string, options?: RequestInit) {
  const [data, setData] = useState<null | StrapiResponseType>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<null | unknown | Error>(null);

  const fetchData = useCallback(async () => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(url, options);
      const fetchedData: StrapiResponseType = await response.json();
      setData(fetchedData);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  }, [options, url]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { data, isLoading, error };
}
