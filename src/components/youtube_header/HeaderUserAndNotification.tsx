import React from 'react'
import { IoMdNotificationsOutline } from "react-icons/io";
import { RiVideoAddLine } from "react-icons/ri";
const HeaderUserAndNotification = () => {
  return (
    <div className="user_icons flex items-center  justify-between w-48 mr-3">
      <div className="user_icon_all"><RiVideoAddLine /></div>
      <div><RiVideoAddLine /></div>
      <div><IoMdNotificationsOutline /></div>
    </div>
  )
}

export default HeaderUserAndNotification