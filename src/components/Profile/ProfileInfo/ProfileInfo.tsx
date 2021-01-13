import React from "react";
import s from "./ProfileInfo.module.css";
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus";

export type ProrsType = {
    profile: any
    status: string
    updateStatus: any
    }

const ProfileInfo = (props: ProrsType) => {

    if(!props.profile){
        return <Preloader />
    }
    return (
        <div>
            <div>
                <img src="https://sun9-49.userapi.com/AfX6GrEzWjvLGKhcksDq9ktmbQ6L2Z2JGiEOZw/tTy-mw5GOYs.jpg" />
            </div>
            <div className={s.descriptionblock}>
                <img src={props.profile.photos.large} />
                <ProfileStatus status={props.status} updateStatus={props.updateStatus} />
            </div>
        </div>
    );
};

export default ProfileInfo;
