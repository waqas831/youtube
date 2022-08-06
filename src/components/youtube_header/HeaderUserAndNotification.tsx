import React, { useState } from 'react'
import { IoMdNotificationsOutline } from "react-icons/io";
import { RiVideoAddLine } from "react-icons/ri";
interface Props {
  setIsOpen: any;
  open:boolean;
}
const HeaderUserAndNotification = ({ setIsOpen ,open}: Props) => {

  return (
    <div className="user_icons flex items-center  justify-between w-48 mr-3">
      <div className="user_icon_all"><RiVideoAddLine /></div>
      <div className="user_icon_all" onClick={() => setIsOpen(!open)}><IoMdNotificationsOutline /></div>
      <div className="user_icon_all" style={{ borderRadius: '100%' }}>
        <img
          width="50px"
          height="50px"
          style={{ borderRadius: "80%" }}
          src="https://media.istockphoto.com/photos/wild-grass-in-the-mountains-at-sunset-picture-id1322277517"
          alt="user" />
      </div>
    </div>
  )
}

export default HeaderUserAndNotification