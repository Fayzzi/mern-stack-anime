// App.jsx
import React, { useEffect } from "react";
import { Routes, BrowserRouter, Route, Navigate } from "react-router-dom";
import LoginPage from "./Pages/LoginPage/LoginPage";
import SignUp from "./Pages/SignUpPage/SignUp";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import UserActivation from "./Pages/ActivationPage/UserActivation";
import Homepage from "./Pages/Homepage/Homepage";
import Movies from "./Pages/Movies/Movies";
import Story from "./Pages/Story/Story";
import Cast from "./Pages/CastAndStaff/Cast";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

import ProfilePage from "./Pages/ProfilePage/ProfilePage";
import AdminLoginPage from "./Pages/LoginPage/AdminLoginPage/AdminLoginPage";
import AdminSignUp from "./Pages/SignUpPage/AdminSignUp/AdminSignup";
import AdminActivation from "./Pages/ActivationPage/AdminActivation/AdminActivation";

import AdminProfile from "./Pages/ProfilePage/AdminProfile/AdminProfile";
import AddUserAdmin from "./Pages/ProfilePage/AddUserAdmin/AddUserAdmin";
import { getUserSingle } from "./Redux/UserReducer/Reducer";
import { getAdmin } from "./Redux/AdminReducer/AdminReducer";
import VideoPlayer from "./Pages/VideoPlayer/VideoPlayer";

function App() {
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.user);
  const { isLoading } = useSelector((state) => state.admin);
  useEffect(() => {
    dispatch(getUserSingle());
    dispatch(getAdmin());
  }, [dispatch]);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/adminLogin" element={<AdminLoginPage />} />
          <Route path="/addminadduser" element={<AddUserAdmin />} />
          <Route path="/adminSignUp" element={<AdminSignUp />} />
          <Route path="/adminProfile" element={<AdminProfile />} />
          <Route path="/adminProfile/video" element={<VideoPlayer />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/cast" element={<Cast />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/" element={<Homepage />} />
          <Route path="/story" element={<Story />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/activation/:token" element={<UserActivation />} />
          <Route
            path="/admin/activation/:admin_activation"
            element={<AdminActivation />}
          />
        </Routes>
        <ToastContainer
          position="bottom-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
      </BrowserRouter>
    </>
  );
}

export default App;
