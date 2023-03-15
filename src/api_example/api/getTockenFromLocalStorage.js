const getTockenFromLocalStorage = () => {
  const keys = Object.keys(localStorage);
  let i = keys.length;
  const authToken = localStorage.getItem("authToken");
  return authToken;
  //   while (i--) {
  //     const val = localStorage.getItem(keys[i]);
  //     try {
  //       const json = JSON.parse(val);
  //       console.log(json);
  //       if (json.credentialType === "IdToken") {
  //         return json.secret;
  //       }
  //     } catch (e) {}
  //   }
};

export default getTockenFromLocalStorage;
