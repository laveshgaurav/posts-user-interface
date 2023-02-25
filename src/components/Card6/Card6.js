import React, { useState } from "react";
import Styles from "./Card6.module.scss";

function Card6() {
  const [current, setCurrent] = useState("");
  const [email, setEmail] = useState("");

  const isValidEmail = (email) => {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };

  return (
    <div className={Styles.card6_container}>
      <h2>Welcome Back</h2>
      <h3>Welcome Back, Please enter your details</h3>
      <div className={Styles.Selector}>
        <button
          className={current === "signin" ? Styles.active : Styles.inactive}
          onClick={() => setCurrent("signin")}
        >
          Sign In
        </button>
        <button
          className={current === "signup" ? Styles.active : Styles.inactive}
          onClick={() => setCurrent("signup")}
        >
          Sign Up
        </button>
      </div>
      <div className={Styles.InputBox}>
        <div className={Styles.Email_Icon}>
          <i class="far fa-envelope"></i>
        </div>
        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {email.length > 0 && (
          <>
            {isValidEmail(email) ? (
              <p className={Styles.valid}>
                <i class="fas fa-check-circle"></i>
              </p>
            ) : (
              <p className={Styles.invalid}>
                <i class="fas fa-times-circle"></i>
              </p>
            )}
          </>
        )}
      </div>
      <button className={Styles.Submit}>Continue</button>
      <h5>Or Continue with</h5>
      <div className={Styles.SocialMedia}>
        <button>
          <i class="fab fa-facebook-f"></i>
        </button>
        <button>
          <i class="fab fa-google"></i>
        </button>
      </div>
    </div>
  );
}

export default Card6;
