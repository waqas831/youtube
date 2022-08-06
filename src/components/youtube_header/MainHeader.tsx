import React from 'react'
import styled from 'styled-components'
import HeaderLogoAndBar from './HeaderLogoAndBar';
import HeaderSearch from './HeaderSearch';
import HeaderUserAndNotification from './HeaderUserAndNotification';
import '../../style/header_style.css';
interface Props{
    setIsOpen:any;
    open:boolean;
}
const MainHeader = ({setIsOpen,open}:Props) => {
    return (
        <MainContainer>
            <HeaderLogoAndBar />
            <HeaderSearch />
            <HeaderUserAndNotification setIsOpen={setIsOpen} open={open} />
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