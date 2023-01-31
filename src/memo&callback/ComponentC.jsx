import React from "react";

const componentC = () => {
  console.log("component C");
  return <div>componentC</div>;
};
export default React.memo(componentC);
