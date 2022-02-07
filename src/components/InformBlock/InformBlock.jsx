import React from "react";
import s from "./InformBlock.module.css";
function InformBlock() {
  return (
    <div className={s.InformBlock}>
      <div className={s.tittle}>Grow Your Business 10x with Metric</div>
      <div className={s.mainInform}>
        The Metric Dashboard brings all of your business insights under one
        roof. Revenue metrics, social, integrations - everything.
      </div>
      <div className={s.buttons}>
        <button className={s.rightButton}>Sign Up</button>
        <button className={s.leftButton}>Learn More</button>
      </div>
    </div>
  );
}

export default InformBlock;
