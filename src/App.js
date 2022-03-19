import React, { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { signInWithGoogle } from "./firebase/firebase.utils";
import { auth } from "./firebase/firebase.utils";
import Login from "./screens/authentication/Login";
import SignUp from "./screens/authentication/SignUp";
import Home from "./screens/Home";

function App() {
  //   const [currentUser, setCurrentUser] = useState({});

  //   useEffect(() => {
  //     const fetchUser = async () => {
  //       const user = auth.onAuthStateChanged((user) => {
  //         setCurrentUser(user);
  //       });
  //       console.log(user);
  //     };
  //     fetchUser();
  //   }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/signup" element={<SignUp />}></Route>
          <Route path="/home" element={<Home />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
