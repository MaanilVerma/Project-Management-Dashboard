import React from "react";
import { MoodCard } from "./MoodCard";
import { employeeDetails } from "../../data/employeeDetails";

import styles from "./TeamMood.module.scss";

const TeamMood = () => {
  return (
    <aside className={styles["team-mood-container"]}>
      <div className={styles["teammood-title"]}>Team Mood</div>
      {employeeDetails.map((value, index) => {
        return (
          <MoodCard
            key={index}
            employeeName={value.employeeName}
            employeeDesignation={value.employeeDesignation}
          />
        );
      })}
    </aside>
  );
};

export { TeamMood };
