import { useState } from "react";

export const useRegisterFetch = (url: string): any => {
  const [data, setData] = useState<Object>({});
  const [loading, setLoading] = useState<boolean | null>(null);
  const [error, setError] = useState<string>("");
  const fetchData = async (
    value: string,
    endPoint: string,
    method: string
  ): Promise<Object | undefined> => {
    if (method === "POST") {
      try {
        setLoading(true);
        const response = await fetch(`${url}/${endPoint}`, {
          method,
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify(value),
        });
        const responseData = await response.json();
        setData(responseData);
        setLoading(false);
        return data;
      } catch (e) {
        setError("Ocorreu algum erro, tente novamente mais tarde.");
      }
    }
  };

  return { data, error, loading, fetchData };
};
