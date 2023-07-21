import React from "react";
import Styles from "./Card15.module.scss";

function Card15() {
  return (
    <div className={Styles.Card15_Container}>
      <h6>PLANS</h6>
      <h2>Long-Term</h2>
      <p>
        Create a vision. To get started, imagine
        <br />
        your dream life.
      </p>
      <div className={Styles.Bar}></div>
      <div className={Styles.Footer}>
        <div className={Styles.Data}>
          <h6>25 yrs CAGR</h6>
          <h2>14.20%</h2>
        </div>
        <div className={Styles.Next}>
          <button>
            <i class="fa-solid fa-arrow-right"></i>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card15;
