import React from "react";
import s from "./Header.module.css";
function Header() {
  return (
    <header className={s.header}>
      <div className={s.wrapper}>
        <div className={s.logo}>   Metric </div>
      </div>
      <div className={s.wrapper}>
        <div className={s.nav}>
          <div className={s.itemNav}>Features</div>
          <div className={s.itemNav}>Pricing</div>
          <div className={s.itemNav}>Customers</div>
          <div className={s.itemNav}>Sign Up</div>
        </div>
      </div>
    </header>
  );
}

export default Header;
