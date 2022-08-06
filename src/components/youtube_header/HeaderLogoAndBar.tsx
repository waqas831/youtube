import React from 'react'
import styled from 'styled-components'
import '../../style/header_style.css'
import { GoThreeBars } from "react-icons/go";
import { GrYoutube } from "react-icons/gr";
const HeaderLogoAndBar = () => {
  return (
    <MainHeaderLogoBar style={{width:'15%'}} className="flex justify-evenly" >
      <div className="main_bar_container">
        <GoThreeBars className='icon' />
      </div>
      <div className="flex justify-between items-center ml-5" >
        <div className='youtube_icon'>
          <GrYoutube />
        </div>
        <div className="flex relative">

          <h5 className='text-black text-2xl ml-1 font-mono subpixel-antialiased font-bold'> YouTube
          </h5>
          <span className="absolute font-normal left-24 bottom-4 ml-0">PK</span>
        </div>
      </div>
    </MainHeaderLogoBar>
  )
}

export default HeaderLogoAndBar

const MainHeaderLogoBar = styled.div`
  display:flex;
  justify-content:space-evenly
  border:2px solid green;
  align-items:center;
  width:260px;
`