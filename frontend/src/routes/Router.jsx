import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Register from "../pages/auth/register/Register";
import Login from "../pages/auth/login/Login";
import Forgetpassword from "../pages/auth/forgetpassword/Forgetpassword";
import Symptom from "../pages/symptom/Symptom";
import Layout from "../pages/mainpage/main/Layout";
import "./Router.css";
import Discussion from "../pages/discussion/Discussion";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/forgetpass",
    element: <Forgetpassword />,
  },
  {
    path: "/symptom",
    element: <Symptom />,
  },

  {
    path: "/discussion",
    element: <Discussion />
  }

]);

export default router;