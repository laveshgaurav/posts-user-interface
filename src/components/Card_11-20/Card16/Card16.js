import React from "react";
import Styles from "./Card16.module.scss";

function Card16() {
  return (
    <div className={Styles.Card16_Container}>
      <h1>Jublia Project Design</h1>
      <h3>
        <span>UI Designer</span>
        <span> | </span>
        <span>Developer</span>
      </h3>
      <div className={Styles.Progress}>
        <div className={Styles.Bar}></div>
      </div>
      <p>
        <span>Progress</span>
        <span>76%</span>
      </p>
      <div className={Styles.Users}>
        <img src="https://randomuser.me/api/portraits/men/49.jpg" alt="User1" />
        <img src="https://randomuser.me/api/portraits/men/35.jpg" alt="User2" />
        <img src="https://randomuser.me/api/portraits/men/76.jpg" alt="User3" />
      </div>
    </div>
  );
}

export default Card16;
