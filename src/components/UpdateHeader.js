import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

const UpdateHeader = () => {
    return (
        <UpdateHeaderContainer>
            <Wrapper>
                <Left>
                    <Icon>
                        <NavLink className="nav" to="/">
                            <i className="fas fa-arrow-left"></i>
                        </NavLink>
                    </Icon>
                    <UpdateHeading>Update Info</UpdateHeading>
                </Left>
                <Right>
                    <Navigations>Update</Navigations>
                    <Navigations>Assesments</Navigations>
                    <Navigations>Programs</Navigations>
                    <Navigations>Sessions</Navigations>
                </Right>
            </Wrapper>
        </UpdateHeaderContainer>
    )
}

const UpdateHeaderContainer = styled.div`
height: 62px;
background-color: white;
display: flex;
align-items: center;
.nav{
    color: grey;
    text-decoration: none;
}
`
const Wrapper = styled.div`
width: 1150px;
margin: 0px auto;
height: 90%;
display: flex;
align-items: center;
`
const UpdateHeading = styled.span`
font-size: 14px;
margin-left: 20px;
font-weight: 600;
color: black;

`
const Left = styled.div`
display: flex;
align-items: center;
`
const Icon = styled.div`

`
const Right = styled.div`
margin-left:auto;
`

const Navigations = styled.span`
font-size: 12px;
color: #979797;
padding: 5px 20px;
border: 1px solid #DBDBDB;
background-color: #FAF8F8;
cursor: pointer;
&:active{
    color: white;
    background-color: #E58425;
}
`

export default UpdateHeader
