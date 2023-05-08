import React from "react";
import Styles from "./Card5.module.scss";

function Card5() {
  return (
    <div className={Styles.Card5_Container}>
      <button className={Styles.Cross}>
        <i className="fas fa-times"></i>
      </button>
      <div className={Styles.Icon}>
        <i class="fas fa-mobile"></i>
      </div>
      <h3>Enter OTP Code</h3>
      <p>
        Code sent +91 940xxxxx87
        <br />
        Check your phone
      </p>
      <div className={Styles.InputBox}>
        <input type="text" />
        <input type="text" />
        <input type="text" />
        <input type="text" />
      </div>
      <button className={Styles.Reset}>
        <i className="fas fa-redo"></i>
        Resend code in <b>22s</b>
      </button>

      <button className={Styles.Verify}>Verify Phone</button>
      <button className={Styles.Cancel}>Cancel</button>
    </div>
  );
}

export default Card5;
