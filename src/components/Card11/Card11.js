import React from "react";
import Styles from "./Card11.module.scss";

function Card11() {
  return (
    <div className={Styles.Card11_Container}>
      <div className={Styles.Card11}>
        <h1>
          <span>
            {/* Lock icon fontawesome */}
            <i className="fas fa-lock"></i>
          </span>
          Pro
        </h1>

        <h2>
          $ 32 <span>/ month</span>
        </h2>

        <ul>
          {[
            "Unlimited credt card",
            "Virtual credits",
            "Personal fin-expert",
          ].map((item, index) => (
            <li>
              <span>
                {/* fontawesome check icon */}
                <i className="fas fa-check"></i>
              </span>
              {item}
            </li>
          ))}
        </ul>

        <button>
          Start trial
          <span>
            {/* right icon */}
            <i className="fas fa-arrow-right"></i>
          </span>
        </button>
      </div>

      <div className={Styles.Testimonial}>
        <div className={Styles.Left}>
          <img
            src="https://randomuser.me/api/portraits/men/29.jpg"
            alt="User"
          />
        </div>
        <div className={Styles.Right}>
          <h3>20K +</h3>
          <p>
            Satisfied
            <br />
            Customers
          </p>
        </div>
      </div>
    </div>
  );
}

export default Card11;
