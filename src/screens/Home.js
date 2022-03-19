import React from "react";
import { useLocation } from "react-router";
import { styles } from "../constants/styles";

function Home() {
  const location = useLocation();
  console.log(location);
  return (
    <div style={{ ...styles.container }}>
      <h1>Home Screen</h1>
      {/* <a>{location.state.currentUser.displayName}</a> */}
    </div>
  );
}

export default Home;
