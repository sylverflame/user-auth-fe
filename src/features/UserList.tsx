import { useEffect, useState } from "react";
import { axiosInstance as axios } from "../api/axios";
import { END_POINTS } from "../api/api-urls";
import { handleError } from "../utils/helperFunctions";
import { Status_2XX } from "../constants";
import useAuth from "../hooks/useAuth";
import type { User } from "../context/AuthContext";

const UserList = () => {
  const { user: loggedInUser } = useAuth();
  const [userList, setUserList] = useState([]);
  useEffect(() => {
    const getAllUsers = async () => {
      try {
        const URL = import.meta.env.VITE_API_BASE_URL + END_POINTS.user;
        const response = await axios.get(URL);
        if (Status_2XX.includes(response.status)) {
          const { data } = response;
          setUserList((data as any).users);
        }
      } catch (error: any) {
        handleError(error);
      }
    };
    getAllUsers();
  }, []);

  if (userList.length === 0 || !loggedInUser) {
    return <></>;
  }

  return (
    <table>
      <thead>
        <tr>
          <td>First Name</td>
          <td>Last Name</td>
          <td>Role</td>
          <td>Actions</td>
        </tr>
      </thead>
      <tbody>
        {userList.map(
          (
            user: { firstName: string; lastName: string; role: string },
            index
          ) => {
            return (
              <UserRow
                key={index}
                user={user}
                index={index}
                loggedInUser={loggedInUser}
              />
            );
          }
        )}
      </tbody>
    </table>
  );
};

type UserRowProps = {
  loggedInUser: User;
  user: { firstName: string; lastName: string; role: string };
  index: number;
};

const UserRow = ({
  loggedInUser,
  user,
  index,
}: UserRowProps): React.ReactNode => {
  return (
    <tr key={index}>
      <td>{user.firstName}</td>
      <td>{user.lastName}</td>
      <td>{user.role}</td>
      <td>
        {loggedInUser?.isAdmin && <button>delete</button>}
        <button>view</button>
      </td>
    </tr>
  );
};

export default UserList;
