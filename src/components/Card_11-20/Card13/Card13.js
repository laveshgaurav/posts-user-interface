import React from "react";
import Styles from "./Card13.module.scss";

function Card13() {
  return (
    <div className={Styles.Card13_Container}>
      <div className={Styles.Top}>
        <h5>SOLUTION ARCHITECTURE</h5>
        <h3>
          The 8 Pillars Of Application
          <br />
          Performance
        </h3>
      </div>
      <div className={Styles.Bottom}>
        <div className={Styles.Bottom_Left}>
          <button>
            {/* facebook icon */}
            <i className="fab fa-facebook-f"></i>
          </button>
          <button>
            {/* twitter icon */}
            <i className="fab fa-twitter"></i>
          </button>
        </div>
        <button className={Styles.Bottom_Right}>
          {/* right */}
          <i className="fas fa-arrow-right"></i>
        </button>
      </div>
    </div>
  );
}

export default Card13;
