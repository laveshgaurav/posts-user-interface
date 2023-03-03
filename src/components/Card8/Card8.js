import React from "react";
import Styles from "./Card8.module.scss";

function Card8() {
  return (
    <div className={Styles.Card8__container}>
      <div className={Styles.Profile}>
        <img
          src="https://randomuser.me/api/portraits/men/9.jpg"
          alt="profile"
        />
        <p>Admin</p>
      </div>

      <h2>Milan Cooper</h2>
      <h3>Wayne, NY - Age 45</h3>

      <div className={Styles.Detail}>
        <div className={Styles.Top}>
          <p>My Scores</p>
          <span className={Styles.Info}>
            <i className="fas fa-info-circle"></i>
          </span>
        </div>
        <div className={Styles.Data}>
          <h1>
            12
            <br />
            <span>Ranks</span>
          </h1>
          <div className={Styles.Bar}></div>
          <h1>
            29
            <br />
            <span>Points</span>
          </h1>
          <div className={Styles.Bar}></div>
          <h1>
            74
            <br />
            <span>Policies</span>
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Card8;
