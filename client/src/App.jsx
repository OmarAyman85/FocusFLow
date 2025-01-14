import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";
import React from "react";
import Login from "./Screens/Login";
import Register from "./Screens/Register";
import AddedDashboard from "./Screens/Dashboard/AddedDashboard";
import ActiveDashboard from "./Screens/Dashboard/ActiveDashboard";
import DoneDashboard from "./Screens/Dashboard/DoneDashboard";
import TaskDetails from "./Screens/TaskDetails";
import RootLayout from "./Layouts/RootLayout";
import HomePage from "./Screens/HomePage";
import DashboardLayout from "./Layouts/DashboardLayout";
import ErrorScreen from "./Screens/Error";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<HomePage />} />
      <Route path="Login" element={<Login />} />
      <Route path="Register" element={<Register />} />
      <Route path="Dashboard/" element={<DashboardLayout />}>
        <Route index element={<ErrorScreen />} />
        <Route path="Active" element={<ActiveDashboard />} />
        <Route path="Added" element={<AddedDashboard />} />
        <Route path="Done" element={<DoneDashboard />} />
        <Route path="*" element={<ErrorScreen />} />
      </Route>
      <Route path="Task/:id" element={<TaskDetails />} />
      <Route path="*" element={<ErrorScreen />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
