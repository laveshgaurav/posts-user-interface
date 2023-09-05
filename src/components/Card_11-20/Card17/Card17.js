import React from "react";
import Styles from "./Card17.module.scss";

function Card17() {
  return (
    <div className={Styles.Card17_Container}>
      <div className={Styles.Profile}>
        <div className={Styles.Photo}>
          <div className={Styles.Box}>
            <img src="https://randomuser.me/api/portraits/men/51.jpg" />
          </div>
        </div>
        <div className={Styles.Details}>
          <div className={Styles.Info}>
            <h3>Top User</h3>
            <h1>Gillian P.</h1>
          </div>
          <div className={Styles.Info}>
            <h3>Daily Purchase</h3>
            <h1>10 items</h1>
          </div>
        </div>
      </div>
      <div className={Styles.Horizontal}></div>
      <div className={Styles.NewUser}>
        <h6>TOTAL NEW USERS</h6>
        <h5>
          <span>
            <i class="fa-solid fa-arrow-up"></i>
          </span>
          <span>8,20%</span>
        </h5>
      </div>
      <h1 className={Styles.Bold}>5,9k</h1>
      <div className={Styles.Footer}>
        <div className={Styles.Users}>
          <img
            src="https://randomuser.me/api/portraits/men/49.jpg"
            alt="User1"
          />
          <img
            src="https://randomuser.me/api/portraits/men/35.jpg"
            alt="User2"
          />
          <img
            src="https://randomuser.me/api/portraits/men/76.jpg"
            alt="User3"
          />
          <img
            src="https://randomuser.me/api/portraits/men/88.jpg"
            alt="User4"
          />
        </div>
        <button>
          View All{" "}
          <span>
            <i class="fa-solid fa-arrow-right"></i>
          </span>
        </button>
      </div>
    </div>
  );
}

export default Card17;
