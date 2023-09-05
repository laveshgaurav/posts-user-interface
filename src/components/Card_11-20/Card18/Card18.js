import React from "react";
import Styles from "./Card18.module.scss";

function Card18() {
  return (
    <div className={Styles.Card18_Container}>
      <div className={Styles.Top}>
        <h3>Special Offer</h3>
        <span>
          <i class="fa-solid fa-x"></i>
        </span>
      </div>
      <button>Upgrade Premium</button>
      <p>
        Note that you should stop using
        <br />
        (uninstall) the trial version after
        <br />
        30 days trial period!
      </p>
      <h1>$32.00</h1>
      <h4>(Limited Time Offer)</h4>
    </div>
  );
}

export default Card18;
