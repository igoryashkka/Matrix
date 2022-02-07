import React from 'react';
import s from "./Sponsors.module.css";
import fastcompany from '../../svgs/fastcompany.svg';
import forbse from '../../svgs/forbse.svg';
import techcrunch from '../../svgs/techcrunch.svg';
import wired from '../../svgs/wired.svg';
import zdnet from '../../svgs/zdnet.svg';

function Sponsors() {
  return <div className={s.sponsors}>
      <div className={s.title}>IN THE PRESS</div>
      <div className={s.svgItems}> 
          <div className={s.item}><img src={fastcompany} alt="imgcompany"/></div>
          <div className={s.item}><img src={forbse} alt="imgcompany"/></div>
          <div className={s.item}><img src={techcrunch} alt="imgcompany"/></div>
          <div className={s.item}><img src={wired} alt="imgcompany"/></div>
          <div className={s.item}><img src={zdnet} alt="imgcompany"/></div>
      </div>
  </div>;
}

export default Sponsors;
