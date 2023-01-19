import React from "react";
import { Button } from "../Button";
import { PlusIcon } from "../../assets/PlusIcon";
import { DownloadIcon } from "../../assets/DownloadIcon";
import { SettingsIcon } from "../../assets/SettingsIcon";
import { BudgetCard } from "../BudgetCard";
import { budgetData } from "../../data/budgetData";

import styles from "./BudgetStatus.module.scss";

const BudgetStatus = () => {
  return (
    <section className={styles["budget-section"]}>
      <div className={styles["status-header-container"]}>
        <div className={styles["title"]}>Budget Status</div>
        <Button
          className={styles["budget-button"]}
          icon={<PlusIcon />}
          iconClassName={styles["budget-icons"]}
          text=" Add New Project"
        />
        <Button
          className={styles["budget-button"]}
          icon={<DownloadIcon />}
          iconClassName={styles["budget-icons"]}
          text=" Download Report"
        />
        <Button
          className={styles["budget-button"]}
          icon={<SettingsIcon />}
          iconClassName={styles["budget-icons"]}
          text=" Filter"
        />
      </div>
      <div className={styles["budget-cards-wrapper"]}>
        {budgetData.map((item, index) => {
          return (
            <BudgetCard
              key={index}
              title={item.title}
              subText={item.subText}
              totalBudget={item.totalBudget}
              profitability={item.profitability}
              actualHours={item.actualHours}
              soldHours={item.soldHours}
            />
          );
        })}
      </div>
    </section>
  );
};

export { BudgetStatus };
