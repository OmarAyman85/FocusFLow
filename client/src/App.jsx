import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";
import React from "react";
import Login from "./Screens/Login";
import Register from "./Screens/Register";
import ActiveDashboard from "./Screens/Dashboard/ActiveDashboard";
import AddedDashboard from "./Screens/Dashboard/AddedDashboard";
import DoneDashboard from "./Screens/Dashboard/DoneDashboard";
import TaskDetails from "./Screens/TaskDetails";
import RootLayout from "./Layouts/RootLayout";
import HomePage from "./Screens/HomePage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<HomePage />} />
      <Route path="Login" element={<Login />} />
      <Route path="Register" element={<Register />} />
      <Route path="Dashboard/Active" element={<ActiveDashboard />} />
      <Route path="Dashboard/Added" element={<AddedDashboard />} />
      <Route path="Dashboard/Done" element={<DoneDashboard />} />
      <Route path="Task/:id" element={<TaskDetails />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
