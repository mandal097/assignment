import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom';

const ProfileRight = () => {
    return (
        <Container>
            <LeftTopSection>
                <TopStatusTxt>Status</TopStatusTxt>
                <TopActiveDiv>
                    <i class="fas fa-check-circle active"></i>
                    active
                </TopActiveDiv>
                <TopUpdateBtn>
                    <NavLink className="nav" to="update">Update Info</NavLink>
                </TopUpdateBtn>
            </LeftTopSection>
            <GeneralInfoDIv>
                <GeneralInfoTxt>General Info</GeneralInfoTxt>
                <InfoDiv>
                    <InfoSpan>Employee Id:</InfoSpan>
                    <InfoP>158</InfoP>
                </InfoDiv>
                <InfoDiv>
                    <InfoSpan>Credential:</InfoSpan>
                    <InfoP>BCBA</InfoP>
                </InfoDiv>
                <InfoDiv>
                    <InfoSpan>Date of Joining</InfoSpan>
                    <InfoP>2021-10-20</InfoP>
                </InfoDiv>
                <InfoDiv>
                    <InfoSpan>Last Login:</InfoSpan>
                    {/* <InfoP>158257597</InfoP> */}
                </InfoDiv>
                <InfoDiv>
                    <InfoSpan>Clinic Location:</InfoSpan>
                    <InfoP>No data</InfoP>
                </InfoDiv>
                <InfoDiv>
                    <InfoSpan>Location Categories:</InfoSpan>
                    <InfoP>No data</InfoP>
                </InfoDiv>
                <InfoDiv>
                    <InfoSpan>Joined At:</InfoSpan>
                    <InfoP>2021-01-01</InfoP>
                </InfoDiv>
            </GeneralInfoDIv>
            <GeneralInfoDIv>
                <GeneralInfoTxt>Staff Assigned</GeneralInfoTxt>
                <InfoDiv>
                    <InfoSpan>Case Manager:</InfoSpan>
                    {/* <InfoSpan>Anne Global:</InfoSpan> */}
                    <InfoP>this </InfoP>
                </InfoDiv>
                <InfoDiv>
                    <InfoSpan>Authorised:</InfoSpan>
                    <InfoP className="authorized">Samuel john</InfoP>
                </InfoDiv>
                <InfoDiv>
                    <InfoSpan>Staff:</InfoSpan>
                </InfoDiv>
            </GeneralInfoDIv>
            <ViewsDiv>
                <ViewsInfoDiv>
                    <ViewsTxt className="hover">View or add insurance</ViewsTxt>
                    <ViewsNumber>03</ViewsNumber>
                    <i class="fas fa-arrow-right arrow"></i>
                </ViewsInfoDiv>
            </ViewsDiv>
            <ViewsDiv>
                <ViewsInfoDiv>
                    <ViewsTxt className="hover">View or add insurance</ViewsTxt>
                    <ViewsNumber>03</ViewsNumber>
                    <i class="fas fa-arrow-right arrow"></i>
                </ViewsInfoDiv>
            </ViewsDiv>
            <ViewsDiv>
                <ViewsInfoDiv>
                    <ViewsTxt className="hover">View or add insurance</ViewsTxt>
                    <ViewsNumber>03</ViewsNumber>
                    <i class="fas fa-arrow-right arrow"></i>
                </ViewsInfoDiv>
            </ViewsDiv>
        </Container>
    )
}

const Container = styled.div`
.active{
    color: blue !important;
}
.nav{
    color: white;
    text-decoration: none;
}
.arrow{
    font-size: 12px;
    margin-right: 2px;
    transition: all 200ms;
}
.authorized{
    color: blue;
}
`

const LeftTopSection = styled.div`
display: flex;
width: 100%;
align-items: center;
/* justify-content: space-between; */
`
const TopStatusTxt = styled.span`
color: rgba(0,0,0,0.8);
font-weight: bold;
font-size: 11px;

`
const TopActiveDiv = styled.div`
width: 20%;
height: 24px;
font-weight: 400;
font-size: 11px;
color: grey;
background-color: white;
border-radius: 5px;
border: 1px solid green;
display: flex;
align-items: center;
margin-left: 30px;
justify-content: space-evenly;
`
const TopUpdateBtn = styled.button`
width: 40%;
height: 26px;
border-radius: 5px;
border: none;
font-size: 10px;
color: white;
margin-left: auto;
background-color: #0B35B3;
font-weight: 400;
display: flex;
align-items: center;
justify-content: center;
`
const GeneralInfoDIv = styled.div`
width: 100%;
height: auto;
padding: 10px 25px;
background-color: white;
border-radius: 5px;
margin-top: 8px;
`

const GeneralInfoTxt = styled.span`
font-weight: bolder;
font-size: 13px;
`
const InfoDiv = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
padding: 0px 0px;
height: 20px;
`
const InfoSpan = styled.span`
color: grey;
font-size: 11px;
font-weight: 400;
`
const InfoP = styled.p`
color: black;
font-size: 11px;
font-weight: 600;
margin-top: 15px;
`
const ViewsDiv = styled.div`

width: 100%;
padding: 5px 25px;
background-color: white;
border-radius: 5px;
margin-top: 8px;
`

const ViewsInfoDiv = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
padding: 0px 0px;
height: 20px;
&:hover{
    .hover{
        color: blue;
    }
    .arrow{
        margin-right: 0px;
    }
}
`
const ViewsTxt = styled.span`
font-size: 11px;
color: black;
font-weight: bold;
transition: all 200ms;
`
const ViewsNumber = styled.span`
margin-left: auto;
margin-right: 20px;
font-size: 11px;
font-weight: bold;
`

export default ProfileRight
