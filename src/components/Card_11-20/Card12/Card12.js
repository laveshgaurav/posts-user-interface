import React from "react";
import Styles from "./Card12.module.scss";

function Card12() {
  return (
    <div className={Styles.Card12_Container}>
      <div className={Styles.Header}>
        <div className={Styles.Left}>
          <div className={Styles.Profile_Pic}>
            <img
              src="https://xsgames.co/randomusers/assets/avatars/male/42.jpg"
              alt="Profile Pic"
            />
          </div>
          <div className={Styles.Title}>
            <h3>Jain James</h3>
            <h5>@janin_james</h5>
          </div>
        </div>
        <div className={Styles.Right}>
          <button>
            <i className="fas fa-times"></i>
          </button>
        </div>
      </div>
      <div className={Styles.Body}>
        <input type="text" placeholder="What's on your mind?" />
      </div>
      <div className={Styles.Footer}>
        <div className={Styles.Left}>
          <button>
            <i className="far fa-smile"></i>
          </button>
          <button>
            <i className="fas fa-camera"></i>
          </button>
          <button>
            <i className="fas fa-image"></i>
          </button>
          <button>
            <i className="fas fa-map-marker-alt"></i>
          </button>
          <button>
            <i className="fas fa-microphone"></i>
          </button>
        </div>
        <div className={Styles.Right}>
          <button>Post</button>
        </div>
      </div>
    </div>
  );
}

export default Card12;
