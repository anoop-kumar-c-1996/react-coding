import React from "react";

const componentA = ({ myname }) => {
  console.log("component A");
  return (
    <div>componentA my full name : {`${myname.fname} - ${myname.lname}`}</div>
  );
};
export default React.memo(componentA);
