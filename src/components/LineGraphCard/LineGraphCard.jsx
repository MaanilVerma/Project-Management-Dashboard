import React from "react";
import { Line } from "react-chartjs-2";

import { ToggleButton } from "../ToggleButton";
import { lineData, lineOptions } from "../../data/graphData";

import styles from "./LineGraphCard.module.scss";

const LineGraphCard = () => {
  return (
    <div className={styles["graph-container"]}>
      <div className={styles["graph-header"]}>
        <div className={styles["text-wrapper"]}>
          <div className={styles["graph-title"]}>Total Revenue</div>
          <div className={styles["yaxis-title"]}>Cost €</div>
        </div>
        <ToggleButton />
      </div>
      <Line options={lineOptions} data={lineData} />
    </div>
  );
};
export { LineGraphCard };
