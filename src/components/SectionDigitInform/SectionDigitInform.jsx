import React from "react";
import s from "./SectionDigitInform.module.css";
import pngTop from "../../svgs/pngTop.svg";
import pngBottom from "../../svgs/pngBottom.svg";
import TabsInform from "./TabsInform/TabsInform";
function SectionDigitInform() {
  return (
    <div className={s.SectionDigitInform}>
      <div className={s.wrapper}>
          <div className={s.titles}>
          <div className={s.title}>Sync Across All Devices </div>
        <div className={s.subTitle}>
          Everything you need to make your business grow super fast{" "}
        </div>
          </div>
        
        <div className={s.sectionTop}>
          <div className={s.sectionTopImg}>
            <img
              src="https://s3-alpha-sig.figma.com/img/e7a1/a9fb/9ca6a8d23b0b475e18ae47ef85f8678b?Expires=1645401600&Signature=bHCldR37QENdgu5aQC2yJTTWwjr3O5YzPVo7dF4F8z-dpx4A45D1lV3ls7s-lpIIysFp01Ou0NT9tqZVknudWqFKAAOtT08YGhc3x44Y6r1YWz0PWWocX2d-D7m43YI-qMbYD0OSghdKmfxc7XTMvldQj7bRhbr00OIZsuxtQow~vKTvN-oPQBPJIF1iIjdeR4Ncy9f-bptfVfmKg6pmJpIXaSpfq-TsYHAebOe59VSJ9Ym8nRJHZ5HR~u5UfCWf03yQQ7nwiEik9cnaOqrSTnhCrnUqSCsHWp3--oykt0LZ-6Yj7tx2dQqZmJxbp2tF6sszru51NFzsXDqQzZjjkw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
              alt="img"
            />{" "}
          </div>
          <div className={s.sectionTopInform}>
            <div className={s.pngTop}>
              <img src={pngTop} alt="pngTop" />{" "}
            </div>
            <div className={s.sectionTopTitle}>Web Application </div>
            <div className={s.sectionTopSubTitle}>
              {" "}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Consectetur
              adipiscing elit.
            </div>
          </div>
        </div>
        <div className={s.sectionBottom}>
          <div className={s.sectionBottomInform}>
            <div className={s.pngBottom}>
              <img src={pngBottom} alt="pngBottom" />{" "}
            </div>
            <div className={s.sectionBottomTitle}>Mobile App </div>
            <div className={s.sectionBottomSubTitle}>
              {" "}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Consectetur
              adipiscing elit.
            </div>
          </div>
          <div className={s.sectionBottomImg}>
            <img
              src="https://s3-alpha-sig.figma.com/img/6c0d/1109/3301f2d892d58eff82239a46b13da426?Expires=1645401600&Signature=Y2hXfuvGv0Jnhk~~ELuF9SCgI4Taw41yq2EvdNPYLtaTOWlTb1CyC7nnDTtEGSuLbu07IJS9zU9AdHDNzwOhiP6M9kC1TYcuM-Sw5mYBJAbAKHmhMLAFCNpBZwRtpMKDVxx9gWgMOV8MMJPFfdaaeEYZISKg0FB7IAjO1SKRTttqtCf5Gu6esTaDvZbYrt0tnyOe4SNk7xlIQEWkipo1Q5NfMsG8LrQ-mP3KkqHZGALOyBH5uPlr80DcAYyMf9IEnC3snTNeQ1h3t4fwRzRSMuqZA~sOi-~H7nN2xKeDp0r~yJx1Qf9inpn-8IOIxktlv4PWucw-1N6ThkN2AJLABw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
              alt="img"
            />{" "}
          </div>
        </div>
        <TabsInform />
      </div>
    </div>
  );
}

export default SectionDigitInform;
