import React from "react";
import Styles from "./Card4.module.scss";

function Card4() {
  const DATA = [50, 30, 70, 40, 60, 90, 10];

  return (
    <div className={Styles.Card4_Container}>
      <div className={Styles.Top}>
        <h5>Spent this month</h5>
        <p>
          <i class="fas fa-sort-up"></i>
          +2.45%
        </p>
      </div>
      <h2>$682.5</h2>
      <h3>
        <i class="fas fa-check-circle"></i>
        On track
      </h3>
      <div className={Styles.Charts}>
        {DATA.map((item, index) => (
          <div className={Styles.Background}>
            <div className={Styles.Bar} style={{ height: `${item}%` }}></div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Card4;
