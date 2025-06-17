import React from "react";
const UserList = React.lazy(() => import("../features/UserList"));

const Home = () => {
  return (
    <>
      <UserList />
    </>
  );
};

export default Home;
