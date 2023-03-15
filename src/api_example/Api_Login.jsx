import React, { useState } from "react";
import getTockenFromLocalStorage from "./api/getTockenFromLocalStorage";

const Api_Login = () => {
  const [login, setLogin] = useState({
    email: "",
    password: "",
  });
  const handleSubmit = () => {
    console.log(getTockenFromLocalStorage());
  };
  return (
    <div>
      <input
        type={"emaiil"}
        value={login.email}
        onChange={(e) => {
          setLogin({ ...login, email: e.target.value });
        }}
      />
      <br />
      <br />
      <input
        type={"password"}
        value={login.password}
        onChange={(e) => {
          setLogin({ ...login, password: e.target.value });
        }}
      />
      <br />
      <br />
      <button onClick={handleSubmit}>Login</button>
    </div>
  );
};

export default Api_Login;
