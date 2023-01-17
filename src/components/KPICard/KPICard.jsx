import React from "react";
import styles from "./KPICard.module.scss";

const KPICard = ({ icon, metricsNumber, metricsSubtext }) => {
  return (
    <div className={styles["kpi-container"]}>
      {icon}
      <div className={styles["metrics-container"]}>
        <p className={styles["metrics-number"]}>{metricsNumber}</p>
        <p className={styles["metrics-subtext"]}>{metricsSubtext}</p>
      </div>
    </div>
  );
};

export { KPICard };
