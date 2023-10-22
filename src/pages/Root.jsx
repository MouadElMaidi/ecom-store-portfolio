import { Outlet } from "react-router-dom";

import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

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
