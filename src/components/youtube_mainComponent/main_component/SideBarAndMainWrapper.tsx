import React from 'react'
import styled from 'styled-components'
import ShowMainList from '../detail/ShowMainList'
import SideBar from '../sidebar/SideBar'

const SideBarAndMainWrapper = () => {
    return (
        <MainSideBarAndMainWrapper>
            <SideBar />
            <ShowMainList />
        </MainSideBarAndMainWrapper>
    )
}

export default SideBarAndMainWrapper


const MainSideBarAndMainWrapper = styled.div`
display:flex;
width:100%;
`