import React from "react";

const componentB = ({ dummy }) => {
  console.log("component B");
  return (
    <div>
      componentB
      <button onClick={dummy}>dummy</button>
    </div>
  );
};
export default React.memo(componentB);
