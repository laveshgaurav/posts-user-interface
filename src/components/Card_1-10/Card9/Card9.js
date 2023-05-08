/* eslint-disable no-unused-vars */
import React from "react";
import Styles from "./Card9.module.scss";

function Card9() {
  const USER = "https://randomuser.me/api/portraits/men/36.jpg";

  return (
    <div className={Styles.Card9_Container}>
      <div className={Styles.Profile_Container}>
        <div className={Styles.Left}>
          <img src={USER} alt="user" />
          <div className={Styles.Details}>
            <h3>Alex Parkinson</h3>
            <h4>Premium Member</h4>
          </div>
        </div>
        <button className={Styles.Edit}>
          <i class="fa-solid fa-pen-to-square"></i>
        </button>
      </div>
      <div className={Styles.Wallet_Container}>
        <div className={Styles.Wallet}>
          <i class="fa-solid fa-wallet"></i>
        </div>
        <div>
          <h2>
            $ <span>4532</span>
          </h2>
          <h4>Credit Balance</h4>
        </div>
      </div>
      <div className={Styles.Settings_Container}>
        <div className={Styles.Setting}>
          <div className={Styles.Icon}>
            <i class="fa-solid fa-dollar-sign"></i>
          </div>
          <h2>Recent Transactions</h2>
        </div>
        <div className={Styles.Setting}>
          <div className={Styles.Icon}>
            <i class="fa-solid fa-credit-card"></i>
          </div>
          <h2>Credit Cards</h2>
        </div>
        <div className={Styles.Setting}>
          <div className={Styles.Icon}>
            <i class="fa-solid fa-lock"></i>
          </div>
          <h2>Settings & Privacy</h2>
        </div>
        <div className={Styles.Setting}>
          <div className={Styles.Icon}>
            <i class="fa-solid fa-right-from-bracket"></i>
          </div>
          <h2>Sign Out</h2>
        </div>
      </div>
    </div>
  );
}

export default Card9;
