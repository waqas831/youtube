import React from 'react'
import styled from 'styled-components'
import { FisrtSectionData, SecondSectionData } from '../../../constants/SideBarConstantsData'
import { GrYoutube } from "react-icons/gr";
import '../../../components/style/sidebar_style.css';
const SideBar = () => {
  return (
    <SideBarMainWrapper >
      <div className="border_botom_all">
        {
          FisrtSectionData.map((item, index) => {
            return (
              <ul className="sidebar_list flex items-center justify-evenly" key={index}>
                <div style={{ width: '20%' }}>
                  {item.icon}
                </div>
                <div style={{ width: '60%' }}>
                  <h4 className="font-normal text-xl">{item.title}</h4>
                </div>
              </ul>
            )
          })
        }
      </div>
      <div className="border_botom_all">
        {
          SecondSectionData.map((item, index) => {
            return (
              <ul className="sidebar_list flex items-center justify-evenly" key={index}>
                <div style={{ width: '20%' }}>
                  {item.icon}
                </div>
                <div style={{ width: '60%' }}>
                  <h4 className="font-normal text-xl">{item.title}</h4>
                </div>
              </ul>
            )
          })
        }
      </div>



    </SideBarMainWrapper>
  )
}

export default SideBar

const SideBarMainWrapper = styled.div`
width:15%;
// border:2px solid red;
`