import { Outlet } from "react-router-dom";

import { Navbar, Sidebar } from "../components";

const Root = () => {
  return (
    <>
      <Navbar />
      <Sidebar />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Root;
