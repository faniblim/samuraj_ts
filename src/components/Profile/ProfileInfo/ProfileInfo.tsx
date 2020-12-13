import React from "react";
import s from "./ProfileInfo.module.css";

const ProfileInfo = () => {
  return (
    <div>
      <div>
        <img src="https://sun9-49.userapi.com/AfX6GrEzWjvLGKhcksDq9ktmbQ6L2Z2JGiEOZw/tTy-mw5GOYs.jpg" />
      </div>
      <div className={s.descriptionblock}>ava+description</div>
    </div>
  );
};

export default ProfileInfo;
