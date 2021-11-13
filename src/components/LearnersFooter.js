// import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

// const LearnersFooter = ({ setIndexFirst, setIndexLast, pages, indexFirst, indexLast, length, users }) => {
const LearnersFooter = ({ totalUsers, active, indexLast, indexFirst, nextPage, prevPage, setUserPerPage, rows, setRows }) => {


    const maxRows = (e) => {
        e.preventDefault()
        setUserPerPage(rows)
        setUserPerPage(e.target.value);
        console.log(rows);
    }

    return (
        <Footer>
            <FoooterLeft>
                <Txt> active customers: {active}/{totalUsers}</Txt>
            </FoooterLeft>
            <FoooterRight>
                <RowsPerPage>
                    <Txt>Rows per page</Txt>
                    <Select value={rows} onChange={maxRows} >
                        <Option value="" disabled="disabled">Select</Option>
                        <Option value="8">Initial</Option>
                        <Option value="5">5</Option>
                        <Option value="10">10</Option>
                        <Option value="15">15</Option>
                        <Option value="20">20</Option>
                        <Option value={`${totalUsers}`}>All</Option>
                    </Select>
                    <i className="fas fa-caret-down"></i>
                </RowsPerPage>
                <Pagination>
                    <Txt>{indexFirst} - {indexLast} of {totalUsers}</Txt>
                    <Div>
                        <i className="fas fa-arrow-left" onClick={prevPage}></i>
                        <i className="fas fa-arrow-right" onClick={nextPage}></i>
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
/* margin-top: auto; */
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

const Select = styled.select`
/* border: .5px solid grey; */
border: none;
height: 30px;
display: flex;
align-items: center;
justify-content: space-between;
flex: 1;
padding:10px;
padding-top: 10px;
display: flex;
align-items: center;
justify-content: center;
margin-right: 10px;
background-color: inherit;
border-radius: 5px;
color: lightgray;
font-size: 12px;
outline: none;
visibility: none;
-webkit-appearance: none;
   -moz-appearance: none;
   appearance: none; 
   position:absolute ;
   right: -15px;
`
const Option = styled.option`
outline: none;
color: grey;
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
position: relative;
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
