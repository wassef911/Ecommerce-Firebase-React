import React from "react";

function UserImg({ displayName, photoURL }) {
  let iconName = JSON.stringify(displayName).toUpperCase();
  return (
    <li className="nav-item">
      <div data-toggle="tooltip" title={iconName.replace(/['"]+/g, "")}>
        {photoURL == undefined ? (
          <div className="user-img mx-2">{iconName[1]}</div>
        ) : (
          <div
            className="user-img mx-2"
            style={{ backgroundImage: `url(${photoURL})` }}
          ></div>
        )}
      </div>
    </li>
  );
}

export default UserImg;
