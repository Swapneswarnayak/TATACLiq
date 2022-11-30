import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import Dashboard from "./Components/Dashboard/Dashboard";
import Login from "./Components/Login/Login";
import Nav from "./Components/Nav/Nav";
import Otp from "./Components/Otp/Otp";
import Preferences from "./Components/Preferences/Preferences";
import UserAuth from "./Components/UserAuth/UserAuth";

function App() {
  const [token, setToken] = useState();

  // if (!token) {
  //   return <Login setToken={setToken} />;
  // }

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Nav />} />

          <Route path="/authenticate" element={<UserAuth />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
