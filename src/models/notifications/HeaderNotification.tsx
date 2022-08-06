import notificationsConstantData from '../../constants/NotificationsData'
import React from 'react'
import '../../style/notification_style.css'
import { IoSettingsOutline } from "react-icons/io5";
import Youtube from '../../youtube.png';
const HeaderNotification = () => {
    return (
        <div className="w-1/3 absolute h-full static"
            style={{ zIndex: 999, left: '40%',
             background: 'black', color: 'white',overflowY:'scroll' }}>
            <div className="flex justify-between p-1"
                style={{ margin: '10px 3px', borderBottom: '2px solid #ccc', zIndex: 1 }}>
                <h2 className="p-1">Notifications</h2>
                <h3 className="setting_icon p-1">
                    <IoSettingsOutline />
                </h3>
            </div>
            {notificationsConstantData.map((notificationData) => {
                return (
                    <div className="flex justify-between mb-4 mt-2">
                        <div className="flex justify-between" style={{ width: '70%' }}>
                            <img src={Youtube} alt="welcome" width="60px"
                                style={{ border: '2px solid', borderRadius: '100px', 
                                height: '70px',marginLeft:'8px' }} />
                            <div>
                                <h4 className='ml-2' style={{ textAlign: 'justify' }}>Welcome in the react nodejs plaulist you can enjoy it and make
                                    Welcome in the react nodejs plaulist you can</h4>
                                <h5 className='mt-3 mb-1 ml-1'>3 days ago</h5>
                            </div>
                        </div>
                        <div style={{ width: '27%' }}>
                            <img src={Youtube} alt="welcome" width="80px"
                                style={{ border: '2px solid', borderRadius: '5px',
                                 height: '70px' }} />
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default HeaderNotification