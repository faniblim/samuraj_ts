import React from "react";
import styles from "./Users.module.css";
import userPhoto from "../../assets/images/user.png";
import { NavLink } from "react-router-dom";

let User = (user: any,followingInProgress: any,unfollow: any,follow:any) => {

    return (
        <div>

          <span>
            <div>
              <NavLink to={"/profile/" + user.id}>
                <img
                    src={user.photos.small != null ? user.photos.small : userPhoto}
                    className={styles.userPhoto}
                />
              </NavLink>
            </div>
            <div>
            {user.followed
                ? <button disabled={followingInProgress.some((id: number)=>id===user.id)}
                          onClick={() => {unfollow(user.id);
                          }}>Unfollow</button>
                : <button disabled={followingInProgress.some((id: number)=>id===user.id)}
                          onClick={() => {follow(user.id);
                          }}>Follow</button>
            }
          </div>
          </span>
            <span>
            <span>
              <div>{user.name}</div>
              <div>{user.status}</div>
            </span>
            <span>
              <div>{"user.lokation.country"}</div>
              <div>{"user.lokation.city"}</div>
            </span>
          </span>
        </div>
    )}


export default User;
