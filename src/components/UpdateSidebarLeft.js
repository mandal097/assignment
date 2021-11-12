import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

const UpdateSidebarLeft = () => {
    return (
        <Container>
            <Heading>Update learners info</Heading>
            <Wrapper>
                <Wrap>
                    <Circle className="circle"></Circle>
                    <NavLink  className="nav" to="general-info">
                        <CenterSpan className="info">General Info</CenterSpan>
                    </NavLink>
                    <Arrow className="arrow"><i className="fas fa-arrow-right"></i></Arrow>
                </Wrap>
                <Wrap>
                    <Circle className="circle"></Circle>
                    <NavLink className="nav" to="personal-info">
                        <CenterSpan className="info">Personal Info</CenterSpan>
                    </NavLink>
                    <Arrow className="arrow"><i className="fas fa-arrow-right"></i></Arrow>
                </Wrap>
                <Wrap>
                    <Circle className="circle"></Circle>
                    <NavLink className="nav" to="personal-info">
                        <CenterSpan className="info">Guardian Info</CenterSpan>
                    </NavLink>
                    <Arrow className="arrow"><i className="fas fa-arrow-right"></i></Arrow>
                </Wrap>
                <Wrap>
                    <Circle className="circle"></Circle>
                    <NavLink className="nav" to="personal-info">
                        <CenterSpan className="info">Clinical Info</CenterSpan>
                    </NavLink>
                    <Arrow className="arrow"><i className="fas fa-arrow-right"></i></Arrow>
                </Wrap>
                <Wrap>
                    <Circle className="circle"></Circle>
                    <NavLink className="nav" to="personal-info">
                        <CenterSpan className="info">Program Status</CenterSpan>
                    </NavLink>
                    <Arrow className="arrow"><i className="fas fa-arrow-right"></i></Arrow>
                </Wrap>
                <Wrap>
                    <Circle className="circle"></Circle>
                    <NavLink className="nav" to="personal-info">
                        <CenterSpan className="info">Tags</CenterSpan>
                    </NavLink>
                    <Arrow className="arrow"><i className="fas fa-arrow-right"></i></Arrow>
                </Wrap>
            </Wrapper>
        </Container>
    )
}

const Container = styled.div`
flex: 1;
height: auto;
`
const Heading = styled.h1`
font-size: 15px;
font-weight: 600;
`
const Wrapper = styled.div`
width: 87%;
height: auto;
`
const Wrap = styled.div`
height: 30px;
width: 80%;
display: flex;
padding: 5px 16px;
align-items: center;
border-radius: 5px;
margin-top: 10px;
&:hover{
    background-color: white;
    .circle{
        background-color: #0B35B3;
    }
    .info{
        color: #0B35B3;
    }
    .arrow{
        display: block;
    }
}
`
const Circle = styled.div`
width: 12px;
height: 12px;
border-radius: 50%;
background-color: grey;
margin-right: 13px;
`
const CenterSpan = styled.span`
color: grey;
font-size: 11px;
font-weight: 400;
`
const Arrow = styled.div`
color: grey;
font-size: 12px;
margin-left: 15px;
display: none;
`

export default UpdateSidebarLeft
