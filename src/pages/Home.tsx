import Header from "../features/Header";
import Login from "../features/Login";
import useAuth from "../hooks/useAuth";

const Home = () => {
  const { user, userLoggedIn } = useAuth();

  if (!userLoggedIn || !user) {
    return <Login />;
  }
  return <Header user={user} />;
};

export default Home;
