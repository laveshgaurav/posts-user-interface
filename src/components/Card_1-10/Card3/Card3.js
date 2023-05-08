/* eslint-disable no-unused-vars */
import React from "react";
import Styles from "./Card3.module.scss";

function Card3() {
  const FB = "https://cdn-icons-png.flaticon.com/512/174/174848.png";
  const IG = "https://cdn-icons-png.flaticon.com/512/2111/2111463.png";
  const TW = "https://cdn-icons-png.flaticon.com/512/733/733579.png";
  const YT = "https://cdn-icons-png.flaticon.com/512/174/174883.png";
  const NETFLIX = "https://cdn-icons-png.flaticon.com/512/2504/2504929.png";

  return (
    <div className={Styles.Card3_Container}>
      <div className={Styles.Details}>
        <h5>Today's Balance</h5>
        <h1>
          <span>$</span>10,864
        </h1>
        <div className={Styles.Buttons}>
          <button>Add funds</button>
          <button>Withdraw funds</button>
        </div>
      </div>
      <div>
        <div className={Styles.History}>
          <div className={Styles.Page}>
            <h4>All Transactions</h4>
            <div className={Styles.Buttons}>
              <button>
                <i className="fas fa-chevron-left"></i>
              </button>
              <button>
                <i className="fas fa-chevron-right"></i>
              </button>
            </div>
          </div>
          <p>Recent Transactions</p>
          {[
            {
              name: "FB",
              icon: FB,
              amount: -200,
              duration: "now",
            },
            {
              name: "IG",
              icon: IG,
              amount: 1200,
              duration: "1 hr ago",
            },
            {
              name: "TW",
              icon: TW,
              amount: -700,
              duration: "2 hrs ago",
            },
            {
              name: "YT",
              icon: YT,
              amount: -500,
              duration: "3 hrs ago",
            },
            {
              name: "NETFLIX",
              icon: NETFLIX,
              amount: -200,
              duration: "4 hrs ago",
            },
          ].map((item, index) => (
            <div className={Styles.Transaction}>
              <div className={Styles.Data}>
                <div className={Styles.Icon}>
                  <img src={item.icon} alt="icon" />
                </div>
                <div className={Styles.Name}>
                  <h4>{item.name}</h4>
                  <h5>{item.duration}</h5>
                </div>
              </div>
              <p
                className={
                  item.amount < 0 ? Styles.Amount_Red : Styles.Amount_Green
                }
              >
                $ {item.amount}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Card3;
