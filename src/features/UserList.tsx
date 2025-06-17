import { useEffect, useState } from "react";
import { axiosInstance as axios } from "../api/axios";
import { END_POINTS } from "../api/api-urls";
import { handleError } from "../utils/helperFunctions";
import { Status_2XX } from "../constants";
import useAuth from "../hooks/useAuth";
import type { User } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const UserList = () => {
  const { user: loggedInUser } = useAuth();
  const [userList, setUserList] = useState([]);

  const navigate = useNavigate();
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

  const handleViewUser = (userId: string): void => {
    navigate(`/user/${userId}`);
  };

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
            user: {
              id: string;
              firstName: string;
              lastName: string;
              role: string;
            },
            index
          ) => {
            return (
              <UserRow
                key={index}
                user={user}
                index={index}
                loggedInUser={loggedInUser}
                handleViewUser={handleViewUser}
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
  user: { id: string; firstName: string; lastName: string; role: string };
  index: number;
  handleViewUser: (userId: string) => void;
};

const UserRow = ({
  loggedInUser,
  user,
  index,
  handleViewUser,
}: UserRowProps): React.ReactNode => {
  return (
    <tr key={index}>
      <td>{user.firstName}</td>
      <td>{user.lastName}</td>
      <td>{user.role}</td>
      <td>
        {loggedInUser?.isAdmin && <button>delete</button>}
        <button onClick={() => handleViewUser(user.id)}>view</button>
      </td>
    </tr>
  );
};

export default UserList;
