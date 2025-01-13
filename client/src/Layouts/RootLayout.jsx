import NavBar from "../Components/Navbar";
import { Outlet } from "react-router-dom";

function RootLayout() {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
}

export default RootLayout;
