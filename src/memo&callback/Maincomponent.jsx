import React, { useMemo, useCallback, useState } from "react";
import ComponentA from "./ComponentA";
import ComponentB from "./ComponentB";
import ComponentC from "./ComponentC";
import "./style.css";

function Maincomponent() {
  const [count, setCount] = useState(0);
  const handleCount = (num = 0) => {
    setCount((prev) => prev + num);
  };

  const myname = useMemo(() => {
    return {
      fname: "abc",
      lname: "cba",
    };
  }, []);

  const dummy = useCallback((e) => {
    console.log("hiii", e);
  }, []);
  return (
    <div>
      <button onClick={() => handleCount(1)}>😈</button>
      {count}
      <button onClick={() => handleCount(-1)}>👿</button>
      <br />
      <ComponentA myname={myname} />
      <br />
      <ComponentB dummy={dummy} />
      <br />
      <ComponentC />
    </div>
  );
}

export default Maincomponent;
