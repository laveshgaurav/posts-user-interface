import React from "react";
import Styles from "./Card14.module.scss";

function Card14() {
  return (
    <div className={Styles.Card14_Container}>
      <div className={Styles.Top}>
        <div className={Styles.Calendar_Container}>
          <div className={Styles.Date}>
            <h4>Mon</h4>
            <h5>12</h5>
          </div>
          <div className={Styles.Events_Container}>
            <div className={Styles.Event}>
              <h4>
                09:00
                <br />
                Combo room
              </h4>
            </div>
            <div className={Styles.Event}>
              <h4>
                10:00
                <br />
                Great hall room
              </h4>
            </div>
          </div>
        </div>
      </div>
      <div className={Styles.Bottom}>
        <h3>Functional Diary</h3>
        <p>
          Stay in control of your meeting room and event sales for your hotel.
        </p>
        <button>
          Learn More
          <i className="fas fa-arrow-right"></i>
        </button>
      </div>
    </div>
  );
}

export default Card14;
