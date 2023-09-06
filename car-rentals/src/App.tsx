import { Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import "./App.css";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Fleets from "./pages/Fleets";
import Header from "./components/Header/Header";
import Car_details from "./pages/Car_details";
import LoginModal from "./components/Modal/LoginModal";
import RegisterModal from "./components/Modal/RegisterModal";
import { verify_user } from "./api/user";
import useUserAuth from "./hooks/useUserAuth";
import { toast } from "react-hot-toast";

function App() {
  const userauth = useUserAuth();
  useEffect(() => {
    verify_user()
      .then((data) => {
        console.log(data);
        if (data.logged_in === true) {
          userauth.login();
        } else {
          toast.error("You are not logged in");
        }
      })
      .catch(() => {
        toast.error("You are not logged in");
      });
  }, [userauth.loggedin]);

  return (
    <>
      <Header />
      <LoginModal />
      <RegisterModal />
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/contact" Component={Contact} />
        <Route path="/car/:id" Component={Car_details} />
        <Route path="/fleets" Component={Fleets} />
      </Routes>
    </>
  );
}

export default App;
