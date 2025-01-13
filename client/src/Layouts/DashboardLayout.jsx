import AddTask from "../Components/AddTask";
import NavBar from "../Components/Navbar";
import { Outlet } from "react-router-dom";

function DashboardLayout() {
  return (
    <>
      <h1>Welcome to your dashboard</h1>
      <AddTask />
      <Outlet />
    </>
  );
}

export default DashboardLayout;
