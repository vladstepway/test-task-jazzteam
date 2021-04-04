import React from "react";
import './Profile.css'

export default function ProfileContainer() {
    return (
        <div className="profile">
            <div className={'user'}>
                <div className={'user-photo'}>
                    <img width={200} height={200}
                         src="https://cdn0.iconfinder.com/data/icons/set-ui-app-android/32/8-512.png"
                         alt="user-photo"/>
                </div>
                <div className={'user-info'}>
                    <div className={'user-name'}>Admin Adminovich</div>
                    <div className={'user-age'}>999999</div>
                    <div className={'user-money'}>99999 <span>USD</span></div>
                </div>

            </div>
        </div>
    );
}
