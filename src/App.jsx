import React from "react";
import { NavBar } from "./components/NavBar";
import { Dashboard } from "./components/Dashboard";

import styles from "./App.module.scss";

function App() {
  return (
    <div className={styles["app"]}>
      <NavBar />
      <Dashboard />
    </div>
  );
}

export default App;
