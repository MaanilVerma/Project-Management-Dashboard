import React from "react";
import styles from "./ToggleButton.module.scss";

const ToggleButton = () => {
  const [isToggled, setIsToggled] = React.useState(false);

  return (
    <div className={styles["toggle-container"]}>
      <div
        className={styles["toggle-button"]}
        onClick={() => setIsToggled(!isToggled)}
        style={{ backgroundColor: isToggled ? "#00DCCD" : "#BEBEBE" }}
      >
        <div
          className={styles["toggle-handle"]}
          style={{
            backgroundColor: "white",
            left: isToggled ? "25px" : "0px",
          }}
        ></div>
      </div>
      <span className={styles["toggle-label"]}>
        {isToggled ? "Week" : "Month"}
      </span>
    </div>
  );
};
export { ToggleButton };
