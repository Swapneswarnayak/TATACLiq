import React, { useEffect } from "react";
import Navbar from "../Component/Navbar/Navbar";
const Success = () => {
  let [state, setState] = React.useState(0);

  let myFunc = () => {
    setTimeout(() => {
      setState((prev) => prev + 1);
    }, 2000);
  };
  useEffect(() => {
    myFunc();
  });
  console.log(state)
  return <div><Navbar />
    {state <= 2 ? <img width={"100px"} style={{ margin:"20% auto"}} src="https://miro.medium.com/max/1400/1*CsJ05WEGfunYMLGfsT2sXA.gif" alt="load"/> : "Payment SuccessFull"}
    </div>;
};

export default Success;
