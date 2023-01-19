import React from "react";

import { KPICard } from "../KPICard/KPICard";
import { TeamMood } from "../TeamMood";
import { LineGraphCard } from "../LineGraphCard";
import { DonughtGraphCard } from "../DonughtGraphCard";
import { BudgetStatus } from "../BudgetStatus";

import { GridIcon } from "../../assets/GridIcon";
import { CheckCircleIcon } from "../../assets/CheckCircleIcon";
import { RefreshIcon } from "../../assets/RefreshIcon";
import { WarningIcon } from "../../assets/WarningIcon";
import { EmployeeIcon } from "../../assets/EmployeeIcon";

import styles from "./Dashboard.module.scss";

const Dashboard = () => {
  return (
    <>
      <section className={styles["dashboard-container"]}>
        <div className={styles["data-points-wrapper"]}>
          <div className={styles["kpi-wrapper"]}>
            <KPICard
              icon={<GridIcon />}
              metricsNumber={5}
              metricsSubtext="Total Projects"
            />
            <KPICard
              icon={<CheckCircleIcon />}
              metricsNumber={1}
              metricsSubtext="Completed"
            />
            <KPICard
              icon={<RefreshIcon />}
              metricsNumber={3}
              metricsSubtext="Ongoing"
            />
            <KPICard
              icon={<WarningIcon />}
              metricsNumber={1}
              metricsSubtext="Delayed"
            />
            <KPICard
              icon={<EmployeeIcon />}
              metricsNumber={3}
              metricsSubtext="Employees"
            />
          </div>
          <div className={styles["graph-wrapper"]}>
            <LineGraphCard />
            <DonughtGraphCard />
          </div>
        </div>
        <TeamMood />
      </section>

      <BudgetStatus />
    </>
  );
};

export { Dashboard };
