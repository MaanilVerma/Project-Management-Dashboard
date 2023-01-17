import React from "react";
import { NavBar } from "./components/NavBar";

import styles from "./App.module.scss";

function App() {
  return (
    <div className={styles["app"]}>
      <NavBar />
    </div>
  );
}

export default App;
