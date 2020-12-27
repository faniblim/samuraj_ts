import React from "react";
import s from "./ProfileInfo.module.css";
import {ProfileType} from "../../../redux/store";
import Preloader from "../../common/Preloader/Preloader";

export type ProrsType = {
    profile: any

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
                ava+description
            </div>
        </div>
    );
};

export default ProfileInfo;
