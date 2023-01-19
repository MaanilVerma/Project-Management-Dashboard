import React from "react";
import { Doughnut } from "react-chartjs-2";

import { ToggleButton } from "../ToggleButton";
import { donughtData, donughtOptions } from "../../data/graphData";

import styles from "./DonughtGraphCard.module.scss";

const DonughtGraphCard = () => {
  return (
    <div className={styles["graph-container"]}>
      <div className={styles["graph-header"]}>
        <div className={styles["graph-title"]}>Budget</div>
        <ToggleButton />
      </div>
      <Doughnut options={donughtOptions} data={donughtData} />
    </div>
  );
};
export { DonughtGraphCard };
