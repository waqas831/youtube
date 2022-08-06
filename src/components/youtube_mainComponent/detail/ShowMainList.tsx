import React, { useEffect, useState } from 'react'
import AllCategories from '../../../constants/SideBarBottomCatagories';
import ShowMainListItems from './ShowMainListItems';
import { YouTubeData } from '../../../constants/YouTubeVideosData';
import HeaderNotification from '../../../models/notifications/HeaderNotification';
interface Props {
  open: boolean
}
export const ShowCategories = () => {
  return (
    <>
      <div className="categories_main_div flex items-center">
        {
          AllCategories.map((item, index) => {
            return (
              <div className="categories_title_div">
                <div
                  key={index}>{item.title}</div>
              </div>
            )
          })
        }
      </div>
    </>
  )
}

const ShowMainList = ({ open }: Props) => {
  const [videosList, setVideosList] = useState(YouTubeData);
  useEffect(() => {
    setVideosList(YouTubeData);
  }, [])
  return (
    <div style={{ width: '85%',position:'relative' }}>
      {open ? <HeaderNotification /> : ''}
      <ShowCategories />
      <div style={{ width: '95%', margin: '0 auto' }}>
        <ShowMainListItems videosList={videosList} />
      </div>
    </div>
  )
}

export default ShowMainList

