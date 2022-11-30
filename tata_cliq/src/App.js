import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

// import Otp from "./Components/Otp/Otp";
import UserAuth from "./Components/UserAuth/UserAuth";

function App() {
  const [token, setToken] = useState();

  // if (!token) {
  //   return <Login setToken={setToken} />;
  // }

  return (
    <div className="App">
      {/* <h1>Application</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />

          <Route path="/preferences" element={<Preferences />} />
        </Routes>
      </BrowserRouter> */}

      <UserAuth />
      {/* <Otp /> */}
    </div>
  );
}

export default App;
