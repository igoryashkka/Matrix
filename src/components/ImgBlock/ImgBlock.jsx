import React from "react";
import s from "./ImgBlock.module.css";
function ImgBlock() {
  return (
    <div className={s.ImgBlock}>
      <img
        className={s.img}
        src="https://s3-alpha-sig.figma.com/img/4372/adc5/a5509e442e3b0926c31dd254eee299e2?Expires=1645401600&Signature=cxCt5ZhfWqgJ0SWTmRdrWSk5Se8RpZLvj6H8Vhhmb29R4PfiPo~eEEtxMjAysK6vBbKkeckvZTWAUtj-bzrohgQv591ymOYCKGSQYBXr8ktJsa7bVLqOoGldJnvNXXu5DPUIBEMy2opTtyh1K9je8LGklnSaOfjBFK-SBzVOuXSS3AdMWTaz2tv3UKbWIhATzej03tDltLel-YgYe6fzLSm2dtJV6nMA5Afpjat1-33qgEdgQYOCjSt0IJyn2sEGio5REVdx38Hwc2hXQErnq1E4RDoB4-iAiH9sOeNZel~1cn~BWs5tz2C~MjVb3iS4PKVBTZBJQf6zRCy1xBA8WA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
        alt="img"
      />
    </div>
  );
}

export default ImgBlock;
