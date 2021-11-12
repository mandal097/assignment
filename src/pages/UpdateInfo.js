import React from 'react'
import { Outlet, useLocation } from 'react-router'
import styled from 'styled-components'
import UpdateHeader from '../components/UpdateHeader'
import UpdateSidebarLeft from '../components/UpdateSidebarLeft'
import UpdateSidebarRight from '../components/UpdateSidebarRight'
import UpdateGeneralInfo from '../components/UpdateGeneralInfo'

const UpdateInfo = () => {
    const location = useLocation();
    const url = location.pathname.split("/")[1]
    const url2 = location.pathname.split('/')[2]
    console.log(url);
    console.log(url2);
    return (
        <>
            <UpdateHeader />
            <Container>
                <UpdateSidebarLeft />
                <Center>
                    {url2 ? <Outlet/>: url ? <UpdateGeneralInfo /> : <Outlet /> }
                </Center>
                <UpdateSidebarRight />
            </Container>
        </>
    )
}

const Container = styled.div`
width: 1150px;
margin: 0px auto;
display: flex;
justify-content: space-between;
margin-top: 20px;
`
const Center = styled.div`
flex: 2.5;
background-color: white;
`
export default UpdateInfo
