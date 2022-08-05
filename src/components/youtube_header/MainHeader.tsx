import React from 'react'
import styled from 'styled-components'
import HeaderLogoAndBar from './HeaderLogoAndBar';
import HeaderSearch from './HeaderSearch';
import HeaderUserAndNotification from './HeaderUserAndNotification';
import '../style/header_style.css';
const MainHeader = () => {
    return (
        <MainContainer>
            <HeaderLogoAndBar />
            {/* <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',borderBottom:'2px solid #ccc'}}> */}

                <HeaderSearch />
                <HeaderUserAndNotification />
            {/* </div> */}
        </MainContainer>
    )
}

export default MainHeader

const MainContainer = styled.div`
    width:100%;
    height:70px;
    display:flex;
    background:#FFFFFF;
    align-items:center;
    justify-content:space-between; 
`;