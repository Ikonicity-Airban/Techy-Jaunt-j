import { useEffect, useState } from "react";

export default function useQuery<T>(func: () => Promise<T>) {
  // Todo: adding cache key
  const [col, setCol] = useState<T>();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<unknown>();

  useEffect(() => {
    setLoading(true);
    try {
      (async () => setCol(await func()))();
      console.log("🚀 ~ col:", col);
    } catch (error: unknown) {
      setError(error);
    } finally {
      setLoading(false);
    }
  }, [func, loading]);

  const refetch = () => {
    setLoading(true);
  };

  return { refetch, loading, col, error };
}
