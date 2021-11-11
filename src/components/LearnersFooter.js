import React from 'react'
import styled from 'styled-components'
const LearnersFooter = () => {
    return (
        <Footer>
            <FoooterLeft>
                <Txt> active customers: 4/18</Txt>
            </FoooterLeft>
            <FoooterRight>
                <RowsPerPage>
                    <Txt>Rows per page</Txt>
                    <i class="fas fa-caret-down"></i>
                </RowsPerPage>
                <Pagination>
                    <Txt>1-10 of 18</Txt>
                    <Div>
                    <i class="fas fa-arrow-left"></i>
                    <i class="fas fa-arrow-right"></i>
                    </Div>
                </Pagination>
            </FoooterRight>
        </Footer>
    )
}

const Footer = styled.footer`
width: 850px;
margin: 0px auto;
height: 62px;
margin-top: 31px;
display: flex;
align-items: center;
`

const FoooterLeft = styled.div`
flex: 0.5;
`
const Txt = styled.span`
color: grey;
font-size: 13px;
font-weight: 400;
`
const FoooterRight = styled.div`
flex: 0.5;
display: flex;
align-items: center;
`
const RowsPerPage = styled.div`
width: 28%;
display: flex;
align-items: center;
justify-content: space-evenly;
`
const Pagination = styled.div`
width: 60%;
display: flex;
align-items: center;
justify-content: space-evenly;
`
const Div = styled.div`
width: 27%;
display: flex;
align-items: center;
justify-content: space-evenly;
`

export default LearnersFooter
