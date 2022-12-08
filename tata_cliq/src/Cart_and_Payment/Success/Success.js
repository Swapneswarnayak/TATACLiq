import React, { useEffect } from "react";
import Navbar from "../Component/Navbar/Navbar";
import { useNavigate } from "react-router-dom";
const Success = () => {
  let [state, setState] = React.useState(0);
  let navigate = useNavigate();
  let myFunc = () => {
    setTimeout(() => {
      setState((prev) => prev + 1);
    }, 1800);
    if (state >= 4) {
      navigate("/");
      localStorage.clear();
    }
  };
  useEffect(() => {
    myFunc();
  });
  console.log(state);
  return (
    <div style={{ height: "600px" }}>
      {state < 2 ? (
        <img
          style={{ margin: "20% auto", width: "200px" }}
          src="https://miro.medium.com/max/1400/1*CsJ05WEGfunYMLGfsT2sXA.gif"
          alt="load"
        />
      ) : state < 4 ? (
        <img
          style={{ width: "700px", margin: "auto" }}
          src="https://designmodo.com/wp-content/uploads/2016/05/8-Add-to-Cart-by-Sabartism.gif"
          alt="imgage"
        />
      ) : (
        "Redirecting to Home"
      )}
    </div>
  );
};

export default Success;
