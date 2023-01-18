import React from "react";
import styles from "./BudgetCard.module.scss";

const BudgetCard = ({
  title,
  subText,
  totalBudget,
  profitability,
  actualHours,
  soldHours,
}) => {
  return (
    <div className={styles["budget-card-container"]}>
      <div className={styles["budget-header-wrapper"]}>
        <div className={styles["budget-text-wrapper"]}>
          <div className={styles["budget-title"]}>{title}</div>
          <div className={styles["budget-subtext"]}>{subText}</div>
        </div>
        <img
          className={styles["profile-image"]}
          src="/src/assets/profile-image.svg"
          alt="profile"
        />
      </div>
      <div className={styles["budget-datapoints"]}>
        <div className={styles["datapoint-title"]}>
          Total Budget:{" "}
          <span className={styles["budget-amount"]}>{totalBudget}</span>
        </div>
        <div className={styles["datapoint-title"]}>
          Profitability(100%):{" "}
          <span className={styles["profitability-amount"]}>
            {profitability}
          </span>
        </div>
      </div>
      <div className={styles["budget-progressbar"]} />
      <div className={styles["hours-count-wrapper"]}>
        <div className={styles["actual-hours"]}>
          Actual Hours: {actualHours}
        </div>
        <div className={styles["sold-hours"]}>{soldHours} Sold Hours</div>
      </div>
    </div>
  );
};

export { BudgetCard };
