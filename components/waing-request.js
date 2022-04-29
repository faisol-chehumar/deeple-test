import React from "react";
import styles from "../styles/Home.module.css";

const WaitngRequest = () => {
  return (
    <div>
      <div className={styles["loading-icon"]} />
      <p>Sending Request</p>
      <p>Please wait...</p>
    </div>
  );
};

export default WaitngRequest;
