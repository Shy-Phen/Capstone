import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./Components/Navbar";
import SignUpPage from "./Pages/SignUpPage";
import Profile from "./Pages/Profile";
import LogInPage from "./Pages/LogInPage";
import HomePage from "./Pages/HomePage";
import { useAuthStore } from "./store/authStore";
import { useEffect } from "react";
import { Toaster } from "react-hot-toast";
import { Loader } from "lucide-react";
import SideBar from "./Components/SideBar";
import AssessmentFramework from "./Pages/AssessmentFramework";
import Evaluate from "./Pages/Evaluate";

const App = () => {
  const { isCheckingAuth, authUser, checkAuth } = useAuthStore();

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  if (isCheckingAuth && !authUser)
    return (
      <div className="flex items-center justify-center h-screen ">
        <Loader className="size-10 animate-spin" />
      </div>
    );

  return (
    <div>
      <Navbar />
      <SideBar />

      <Routes>
        <Route
          path="/"
          element={authUser ? <HomePage /> : <Navigate to="/login" />}
        />
        <Route
          path="/signup"
          element={!authUser ? <SignUpPage /> : <Navigate to="/" />}
        />
        <Route
          path="/login"
          element={!authUser ? <LogInPage /> : <Navigate to="/" />}
        />
        <Route
          path="/asseement-framework"
          element={
            authUser ? <AssessmentFramework /> : <Navigate to="/login" />
          }
        />
        <Route
          path="/evaluate"
          element={authUser ? <Evaluate /> : <Navigate to="/login" />}
        />
        <Route
          path="/profile"
          element={authUser ? <Profile /> : <Navigate to="/login" />}
        />
      </Routes>
      <Toaster />
    </div>
  );
};

export default App;
