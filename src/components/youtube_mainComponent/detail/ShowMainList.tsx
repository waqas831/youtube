import React, { useEffect, useState } from 'react'
import AllCategories from '../../../constants/SideBarBottomCatagories';
import ShowMainListItems from './ShowMainListItems';
import {YouTubeData} from '../../../constants/YouTubeVideosData';

export const ShowCategories = () => {
  return (
    <>
      <div style={{ display: 'flex', alignItems: 'center', borderTop: '2px solid #ccc', borderBottom: '2px solid #ccc' }}>
        {
          AllCategories.map((item, index) => {
            return (
              <div style={{ backgroundColor: '#CCC', border: '2px solid #FFF', padding: '5px',marginTop:'2px',marginBottom:'2px', marginLeft: '10px', borderRadius: '100px' }}>
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

const ShowMainList = () => {
  const [videosList,setVideosList]=useState(YouTubeData);
  useEffect(()=>{
    setVideosList(YouTubeData);
  },[])
  return (
    <div style={{width:'85%'}}>
      <ShowCategories />
      <div style={{width:'95%',margin:'0 auto'}}>
      <ShowMainListItems />
      </div>
    </div>
  )
}

export default ShowMainList

