import React from 'react';
import s from "./Home.module.css";
import InformBlock from '../../InformBlock/InformBlock';
import ImgBlock from '../../ImgBlock/ImgBlock';
function Home() {
  return <div className={s.home}>
  <div className={s.wrapperHome}>
    <div className={s.rightBlock}>
        <InformBlock />
    </div>
    <div className={s.leftBlock}>
        <ImgBlock />
    </div>
   
  </div>

   
</div>
}

export default Home;
