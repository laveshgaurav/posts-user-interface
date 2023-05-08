import React, { useState } from "react";
import Styles from "./Card2.module.scss";

function Card2() {
  const [active, setActive] = useState("");

  return (
    <div className={Styles.Card2_Container}>
      <div className={Styles.Header}>
        <div className={Styles.Detail}>
          <h3>Individual tax return 2023</h3>
          <p>08 February 2023</p>
        </div>
        <button className={Styles.Button}>
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
      <div className={Styles.Type}>
        {[
          "Professional",
          "Employed",
          "Single",
          "Resident",
          "Non-resident",
          "New York,NY",
        ].map((item, index) => (
          <button
            key={index}
            className={Styles.Tags}
            onClick={() => setActive(item)}
            style={{
              backgroundColor: active === item && "#3a3aff",
              color: active === item && "#f5f5ff",
            }}
          >
            {item}
          </button>
        ))}
      </div>
      <div className={Styles.Confirmation}>
        <div className={Styles.Total}>
          <h3>$1000</h3>
          <p>Potential Earning</p>
        </div>
        <button className={Styles.Confirm}>Confirm</button>
      </div>
    </div>
  );
}

export default Card2;
