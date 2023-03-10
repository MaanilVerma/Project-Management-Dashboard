import React from "react";
import profileImage from "../../assets/profile-image.svg";
import styles from "./TeamMood.module.scss";

const MoodCard = ({ employeeName, employeeDesignation }) => {
  return (
    <div className={styles["mood-card-container"]}>
      <div className={styles["employee-details"]}>
        <img
          className={styles["employee-picture"]}
          src={profileImage}
          alt="Employee Image"
        />
        <div className={styles["employee-credentials-container"]}>
          <div className={styles["employee-credentials"]}>{employeeName}</div>
          <div className={styles["employee-designation"]}>
            {employeeDesignation}
          </div>
        </div>
      </div>
      <input type="range" min="1" max="100" className={styles["mood-slider"]} />
    </div>
  );
};

export { MoodCard };
