import React from 'react'
import styled from 'styled-components'
import GeneralInfo from '../components/GeneralInfo'
import UpdateHeader from '../components/UpdateHeader'
import UpdateSidebarLeft from '../components/UpdateSidebarLeft'
import UpdateSidebarRight from '../components/UpdateSidebarRight'
const UpdateInfo = () => {
    return (
        <>
        <UpdateHeader/>
            <Container>
                <UpdateSidebarLeft />
                <Center>
                    <GeneralInfo/>
                </Center>
                <UpdateSidebarRight/>
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
