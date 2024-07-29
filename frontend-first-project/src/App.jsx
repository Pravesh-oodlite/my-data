import React, { useEffect } from "react";
import FormCard from "./pages/Login";
import ForgetPassword from "./pages/Login/components/ForgetPassword";
import ResetPassword from "./pages/Login/components/ResetPassword";
import AppLayout from "./components/Layout";
import User from "./pages/User";
import { Route, Routes } from "react-router-dom";
import EditProfile from "./pages/Profile";
import Auth from "./routes/auth";
import Registration from "./pages/Login/components/Registration";
import { useSelector } from "react-redux";
import { ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  const token = useSelector((state) => state.auth.token);
  // const token = false
  // const token = true

  return (
    <div>
      <ToastContainer />
      {token ? (
        <AppLayout>
          <Routes>
            <Route path="/user" element={<User />} />
            <Route path="/profile" element={<EditProfile />} />
          </Routes>
        </AppLayout>
      ) : (
        <Routes>
          <Route path="" element={<FormCard />} />
        </Routes>
      )}

      <Routes>
        <Route path="/login" element={<FormCard />} />
        <Route path="/forget-password" element={<ForgetPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />
      </Routes>
    </div>
  );
};

export default App;
