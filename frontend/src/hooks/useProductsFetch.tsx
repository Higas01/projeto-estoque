import { useState } from "react";

export const useProductsFetch = (url: string): any => {
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  const fetchData = async (
    endPoint: string,
    method: string,
    token: string,
    value?: string
  ): Promise<Object | undefined> => {
    if (method === "GET") {
      try {
        const response = await fetch(`${url}/${endPoint}`, {
          headers: {
            "Content-type": "application/json",
            authorization: `Bearer ${token}`,
          },
        });
        const responseJSON = await response.json();
        setLoading(false);
        return responseJSON;
      } catch (error) {
        setError("Ocorreu algum erro, por favor, tente novamente mais tarde");
      }
    } else if (method === "POST") {
      try {
        const response = await fetch(`${url}/${endPoint}`, {
          method,
          headers: {
            "Content-type": "application/json",
            authorization: `Bearer ${token}`,
          },
          body: value ? JSON.stringify(value) : "",
        });
        const responseJSON = await response.json();
        setLoading(false);
        return responseJSON;
      } catch (error) {
        setError("Ocorreu um erro, por favor, tente novamente mais tarde");
      }
    } else if (method === "DELETE") {
      try {
        const response = await fetch(`${url}/${endPoint}`, {
          method,
          headers: {
            "Content-type": "application/json",
            authorization: `Bearer ${token}`,
          },
        });
        const responseJSON = await response.json();
        setLoading(false);
        return responseJSON;
      } catch (error) {
        setError("Ocorreu um erro, por favor, tente novamente mais tarde.");
      }
    } else if (method === "PUT") {
      try {
        const response = await fetch(`${url}/${endPoint}`, {
          method,
          headers: {
            "Content-type": "application/json",
            authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(value),
        });
        const responseJSON = await response.json();
        setLoading(false);
        return responseJSON;
      } catch (error) {
        setError("Ocorreu um erro, por favor, tente novamente mais tarde");
      }
    }
  };

  return { loading, error, fetchData };
};
