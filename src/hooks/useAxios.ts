import { useState } from "react";
import { axiosInstance as axios } from "../api/axios";

type FetchDataProps = {
  URL: string;
  method: "GET" | "POST" | "DELETE" | "UPDATE";
  payload?: any;
};

export const useAxios = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState<any>("");
  const [error, setError] = useState("");

  const fetchData = async ({ URL, method, payload }: FetchDataProps) => {
    setIsLoading(true);
    try {
      let response;
      switch (method) {
        case "GET":
          response = await axios.get(URL);
          break;
        case "POST":
          response = await axios.post(URL, payload);
          break;
        case "DELETE":
          response = await axios.delete(URL);
          break;
        case "UPDATE":
          response = await axios.put(URL, payload); // or patch
          break;
        default:
          throw new Error("Unsupported method");
      }

      setData(response.data);
      setError("");
    } catch (err: any) {
      console.error("Axios Error:", err.message);
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    isLoading,
    data,
    error,
    fetchData,
  };
};
