import React from "react";
import { useNavigate } from "react-router-dom";

const Signin = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div>This is Signin page</div>
      <button onClick={() => navigate("/home")}>Go to Home</button>
    </div>
  );
};

export default Signin;
