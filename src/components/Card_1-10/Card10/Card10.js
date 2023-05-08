import React from "react";
import Styles from "./Card10.module.scss";

function Card10() {
  return (
    <div className={Styles.Card10_Container}>
      <div className={Styles.Card1_Container}>
        <div className={Styles.Header}>
          <div className={Styles.Profile}>
            <img
              src="https://randomuser.me/api/portraits/men/34.jpg"
              alt="profile"
            />
            <h3> Kenneth Ericson</h3>
          </div>
          <button className={Styles.Menu}>
            <i class="fa-solid fa-ellipsis-vertical"></i>
          </button>
        </div>
        <p className={Styles.Content}>
          The word "coffee" entered the English language in the 1582 via the
          Dutch koffie...
        </p>
        <div className={Styles.Footer}>
          <button className={Styles.Btn}>
            <span>
              <i class="fa-solid fa-thumbs-up"></i>
            </span>
            783 Likes
          </button>
          <button className={Styles.Btn}>
            <span>
              <i class="fa-solid fa-comments"></i>
            </span>
            67 Comments
          </button>
        </div>
      </div>

      <div className={Styles.Card2_Container}>
        <div className={Styles.Header}>
          <div className={Styles.Profile}>
            <img
              src="https://randomuser.me/api/portraits/men/34.jpg"
              alt="profile"
            />
            <div>
              <h3> Kenneth Ericson</h3>
              <h4>San Diego, CA</h4>
            </div>
          </div>
          <button className={Styles.Menu}>
            <i class="fa-solid fa-ellipsis-vertical"></i>
          </button>
        </div>
      </div>

      <div className={Styles.Card3_Container}>
        <div className={Styles.Left}>
          <h4>1.8M</h4>
          <h5>App Downloads</h5>
        </div>
        <div className={Styles.Right}>
          {[5, 4, 3, 9, 8, 7, 2, 5, 1, 5, 3, 2].map((item, index) => (
            <div
              className={Styles.Bar}
              style={{ height: `${item * 7}px` }}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Card10;
