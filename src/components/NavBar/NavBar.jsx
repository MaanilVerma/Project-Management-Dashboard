import React from "react";
import { Button } from "../Button";
import { BellIcon } from "../../assets/BellIcon";
import styles from "./NavBar.module.scss";

const NavBar = () => {
  return (
    <header className={styles["navbar-container"]}>
      <h1 className={styles["header-logo"]}>HOURS</h1>
      <div className={styles["menu-wrapper"]}>
        <Button className={styles["menu-item"]} text="Dashboard" />
        <Button className={styles["menu-item"]} text="Projects" />
        <Button className={styles["menu-item"]} text="Team" />
        <Button className={styles["menu-item"]} text="Clients" />
        <Button className={styles["menu-item"]} text="Time" />
        <Button className={styles["menu-item"]} text="Reports" />
      </div>
      <div className={styles["user-details"]}>
        <BellIcon />
        <img
          className={styles["user-profile-image"]}
          src="/src/assets/profile-image.svg"
          alt="profile image"
        />
        <p className={styles["username"]}>Mario</p>
      </div>
    </header>
  );
};

export { NavBar };
