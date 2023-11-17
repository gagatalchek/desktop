import { Routes, Route } from "react-router-dom";
import Login from "../Pages/Login/Login";

const RouterContainer = () => {
  return (
    <>
      <Routes>
        <Route index element={<Login />} />
        {/* <Route path="messages" element={<DashboardMessages />} />
      <Route path="tasks" element={<DashboardTasks />} /> */}
      </Routes>
    </>
  );
};

export default RouterContainer;
