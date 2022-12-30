import "./App.css";
import Home from "./Home/Home/Home.js";
import NavBar from "./navbar/navbar";
import AllRoutes from "./routes/Routes";
import React, { useState } from "react";
import { LoginContext } from "./ProductSection/Context/Context";
import Footer from "./Home/Footer/Footer";
import { useEffect } from "react";


function App() {
  const [loginInfo, setloginInfo] = useState(
    JSON.parse(sessionStorage.getItem("loggedIn"))
  );
  let [inputLoad, setinputLoad] = React.useState(false);
  useEffect(() => {
    console.log(inputLoad);
  }, );
  return (
    <div className="App">
       <LoginContext.Provider value={{ loginInfo, setloginInfo, fn: setinputLoad, valu:inputLoad }}>
        <NavBar fn={setinputLoad} />
        <AllRoutes  />
        <Footer />
      </LoginContext.Provider> 
      
    </div>
  );
}

export default App;
