import React from "react";
import Styles from "./Card1.module.scss";

function Card1() {
  return (
    <div className={Styles.Card1_Container}>
      <h2>Language</h2>
      <select>
        <option value="">Select Language</option>
      </select>
      <p>
        Is the language for the procedding the one mentioned in the agreement?
      </p>
      <div className={Styles.Checkbox_Container}>
        <label>
          <input type="checkbox" />
          YES
        </label>

        <label>
          <input type="checkbox" />
          NO
        </label>
      </div>
    </div>
  );
}

export default Card1;
