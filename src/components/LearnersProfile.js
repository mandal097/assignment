import React from 'react'
import styled from 'styled-components'
import ProfileLeft from './ProfileLeft'
import ProfileRight from './ProfileRight'

const LearnersProfile = ({ showProfile, handleClick }) => {
    return (
        <>
        {
            showProfile ==="open" &&
            <Container>
                <LearnersProfileContainer>
                    <Wrapper>
                        <Backbtn onClick={handleClick}>
                        <i class="fas fa-arrow-left"></i>
                        <BackHeading>Back to home</BackHeading>
                        </Backbtn>
                        <Main>
                            <Left>
                                <ProfileLeft />
                            </Left>
                            <Right>
                                <ProfileRight />
                            </Right>
                        </Main>
                    </Wrapper>
                </LearnersProfileContainer>
            </Container>
            }
        </>
    )
}


const Container = styled.div`
background-color:rgba(0,0,0,0.1);
position: fixed;
top: 0;
left: 0;
right: 0;
bottom: 0;
z-index:111;
/* transform: translateX(100vw); */

`

const LearnersProfileContainer = styled.div`
width: 65%;
height: 100vh;
background-color: tomato;
margin-left: auto;
background-color:  #CBCBCB;
padding: 4px 20px;
box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
.active{
    color: teal !important;
    font-size: 10px !important;
    margin-left: 6px;
}
.notActive{
    color: red !important;
    font-size: 10px !important;
    margin-left: 6px;
}
`

const Wrapper = styled.div`
`
const Backbtn = styled.div`
cursor: pointer;

`


const BackHeading = styled.span`
margin-left: 10px;
font-weight: 600;
font-size: 12px;
color: rgba(0,0,0,0.9);

`
const Main = styled.div`
width: 100%;
height: 100%;
margin-top: 12px;
display: flex;
justify-content: space-between;
`
const Left = styled.div`
width: 55%;
`

const Right = styled.div`
width: 42%;
`

export default LearnersProfile
