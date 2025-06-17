import { useNavigate } from "react-router-dom";
import type { User } from "../context/AuthContext";
import useAuth from "../hooks/useAuth";
import "./Header.css";

type HeaderProps = {
  user: User;
};

const Header = ({ user }: HeaderProps): React.ReactNode => {
  const { logout } = useAuth();
  const navigate = useNavigate();
  const handleLogout = () => {
    logout();
    navigate("/");
  };
  return (
    <div className="header-component">
      <p>
        <span>Logged User: {user?.username}</span>
        <span>Role: {user?.role}</span>
      </p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Header;
