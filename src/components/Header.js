import React from 'react'
import styled from 'styled-components'
// import SearchIcon from '@material-ui/icons/Search';
const Header = () => {
    return (
        <HeaderContainer>
            <Wrapper>
                <HeaderLeft>
                    <Heading>
                        Learners
                    </Heading>
                    <Button>
                        +Add Learner
                    </Button>
                    <p>Or</p>
                </HeaderLeft>
                <HeaderRight>
                    <Input type='text' placeholder="Search by Name" />
                    <Input type='text' placeholder="Search by Email" />
                    <Select>
                        <Option>Category</Option>
                    </Select>
                    <Select>
                        <Option >status</Option>
                        <Option>Category</Option>
                        <Option>Category</Option>
                        <Option>Category</Option>
                    </Select>
                    <Search>
                        {/* <SearchIcon/> */}
                        <i class="fas fa-search"></i>
                        <SearchTitle>Search</SearchTitle>
                    </Search>
                </HeaderRight>
            </Wrapper>
        </HeaderContainer>
    )
}

const HeaderContainer = styled.div`
width: 100%;
background-color: white;
height: 62px;
`
const Wrapper = styled.div`
width: 1150px;
height: 100%;
margin: 0px auto;
display: flex;
align-items: center;
`
const HeaderLeft = styled.div`
flex: 0.25;
display: flex;
align-items: center;
justify-content: space-between;
padding-right: 20px;
p{
    text-transform: uppercase;
    color: grey;
    font-size: 14px;
}
`
const Heading = styled.span`
font-size: 20px;
font-weight: 600;

`
const Button = styled.button`
width: 40%;
height: 30px;
background-color: #E58425;
border: none;
color: white;
font-size: 11px;
font-weight: bolder;
border-radius: 5px;

`
const HeaderRight = styled.div`
flex: 0.75;
display: flex;
align-items: center;
`
const Input = styled.input`
height: 30px;
flex: 1;
padding-left: 16px;
margin-right: 10px;
background-color:#FAF8F8;
border: .5px solid grey;
border-radius: 5px;
outline: none;
`
const Select = styled.select`
border: .5px solid grey;
height: 30px;
display: flex;
align-items: center;
justify-content: space-between;
flex: 1;
padding-left:16px;
margin-right: 10px;
background-color:#FAF8F8;
border-radius: 5px;
color: grey;
`
const Option = styled.option`
outline: none;
`
const Search = styled.div`
height: 30px;
flex: 0.5;
display: flex;
align-items: center;
justify-content: space-evenly;
background-color: #0B35B3;
border-radius: 5px;
color: white;
font-size: 12px;
font-weight: bold;
padding: 0px 5px;
`
const SearchTitle = styled.span`

`

export default Header
