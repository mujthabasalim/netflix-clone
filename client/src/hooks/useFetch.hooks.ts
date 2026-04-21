import { useState, useCallback } from "react";

export const useFetch = <T>() => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const execute = useCallback(async (fetcher: () => Promise<T>) => {
    setLoading(true);
    setError(null);

    try {
      // Added a 1.5 second artificial delay for testing the loading skeleton
      // await new Promise((resolve) => setTimeout(resolve, 1500));
      const response = await fetcher();
      setData(response);
      return response;
    } catch (error: unknown) {
      setError(error instanceof Error ? error.message : "Something went wrong");
    } finally {
      setLoading(false);
    }
  }, []);
  return { data, loading, error, execute };
};
