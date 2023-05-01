import { useState } from "react";

export const useProductsFetch = (url: string): any => {
  const [data, setData] = useState<object>({});
  const [loading, setLoading] = useState<boolean | null>(null);
  const [error, setError] = useState<string>("");

  const fetchData = async (
    endPoint: string,
    method: string,
    token: string,
    value?: string
  ): Promise<Object | undefined> => {
    if (method === "GET") {
      try {
        setLoading(true);
        const response = await fetch(`${url}/${endPoint}`, {
          headers: {
            "Content-type": "application/json",
            authorization: `Bearer ${token}`,
          },
        });
        const responseJSON = await response.json();
        setData(responseJSON);
        setLoading(false);
        return data;
      } catch (error) {
        setError("Ocorreu algum erro, por favor, tente novamente mais tarde");
      }
    } else if (method === "POST") {
      try {
        setLoading(true);
        const response = await fetch(`${url}/${endPoint}`, {
          method,
          headers: {
            "Content-type": "application/json",
            authorization: `Bearer ${token}`,
          },
          body: value ? JSON.stringify(value) : "",
        });
        const responseJSON = await response.json();
        setData(responseJSON);
        setLoading(false);
        return data;
      } catch (error) {
        setError("Ocorreu um erro, por favor, tente novamente mais tarde");
      }
    }
  };

  return { data, loading, error, fetchData };
};
