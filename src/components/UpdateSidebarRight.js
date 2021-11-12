import React from 'react'
import styled from 'styled-components'
const UpdateSidebarRight = () => {
    return (
        <Container>
            <Wrapper>
                <TopDiv>
                <TopHeading>Help Desk</TopHeading>
                <Icon><i class="far fa-question-circle"></i></Icon>
                </TopDiv>
                <A>How to create a schedule ?</A>
                <ScheduleBox>
                    <A className="schedule">How to create a schedule ?</A>
                    <P>Lorem isicing elit. Exercitationem sint minus consequatur aliquid accusamus totam eligendi beatae! Mollitia, ex unde.</P>
                </ScheduleBox>
                <A>How to create a schedule ?</A>
            </Wrapper>
        </Container>
    )
}
const Container = styled.div`
flex: 1;
.schedule{
    color: #0B35B3;
    font-weight: bold;
    font-size: 11px;
}
`
const Wrapper = styled.div`
margin-left: 50px;
`
const TopDiv = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
margin-bottom: 17px;
`
const TopHeading = styled.h2`
font-size: 15px;
font-weight: 600;

`
const Icon = styled.div`

`
const A = styled.a`
font-size: 12px;
color: grey;
`
const ScheduleBox = styled.div`
background-color: white;
width: 100%;
margin-top: 20px;
margin-bottom: 20px;
padding: 5px;
border-radius: 5px;
`
const P =styled.p`
font-size: 10px;
color: rgba(0,0,0,0.7);
font-weight: 600;
margin-top: 10px;
`

export default UpdateSidebarRight
