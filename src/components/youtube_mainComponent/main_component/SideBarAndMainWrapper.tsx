import React from 'react'
import styled from 'styled-components'
import ShowMainList from '../detail/ShowMainList'
import SideBar from '../sidebar/SideBar'
interface Props{
    open:boolean
}
const SideBarAndMainWrapper = ({open}:Props) => {
    return (
        <MainSideBarAndMainWrapper>
            <SideBar />
            <ShowMainList open={open} />
        </MainSideBarAndMainWrapper>
    )
}

export default SideBarAndMainWrapper


const MainSideBarAndMainWrapper = styled.div`
display:flex;
width:100%;
`