import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { handleError } from "../utils/helperFunctions";
import { END_POINTS } from "../api/api-urls";
import { Status_2XX } from "../constants";
import { axiosInstance as axios } from "../api/axios";
import type { ViewUser } from "../types";

const ViewUser = () => {
  const [userData, setUserData] = useState<ViewUser | null>(null);
  const { uid } = useParams();
  useEffect(() => {
    if (!uid) return;
    const fetchUser = async (id: string | undefined) => {
      try {
        const URL =
          import.meta.env.VITE_API_BASE_URL + END_POINTS.user + "/" + id;
        const response = await axios.get(URL);
        if (Status_2XX.includes(response.status)) {
          setUserData((response.data as any).user);
        }
      } catch (error: any) {
        handleError(error);
      }
    };
    fetchUser(uid);
  }, []);

  if (!userData) {
    return null;
  }
  return (
    <div>
      {Object.entries(userData).map(([key, value]) => (
        <div key={key}>
          {key}: {String(value)}
        </div>
      ))}
    </div>
  );
};

export default ViewUser;
