import type { User } from "../context/AuthContext";
import useAuth from "../hooks/useAuth";
import "./Header.css";

type HeaderProps = {
  user: User;
};

const Header = ({ user }: HeaderProps): React.ReactNode => {
  const { logout } = useAuth();
  const handleLogout = () => {
    logout();
  };
  return (
    <div className="header-component">
      <p>Logged User: {user?.username}</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Header;
