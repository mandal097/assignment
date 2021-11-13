import React, { useState } from 'react'
// import Header from '../components/Header'
import Learners from '../components/Learners'
import styled from 'styled-components'

const Home = () => {
    // const [filter ,setFilter] = useState({})
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [category, setCategory] = useState('')
    const [status, setStatus] = useState('')

    return (
        <Container>
            <HeaderContainer>
                <Wrapper>
                    <HeaderLeft>
                        <Heading>
                            Learners
                        </Heading>
                        <Button>
                            +Add Learner
                        </Button>
                        <Div>Or</Div>
                    </HeaderLeft>
                    <HeaderRight>
                        <Input type='text' placeholder="Search by Name" value={name} onChange={(e) => setName(e.target.value)} />
                        <Input type='text' placeholder="Search by Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                        <Select name="category" value={category} onChange={(e) => setCategory(e.target.value)}>
                            <Option value="">Category</Option>
                            <Option value="health">health</Option>
                        </Select>
                        <Select name="active" value={status} onChange={(e) => setStatus(e.target.value)}>
                            <Option value="">Status</Option>
                            <Option value="active">Active</Option>
                            <Option value="offline">Offline</Option>
                        </Select>
                        <Search>
                            {/* <Search/> */}
                            <i className="fas fa-search"></i>
                            <SearchTitle>Search</SearchTitle>
                        </Search>
                    </HeaderRight>
                </Wrapper>
            </HeaderContainer>
            <Learners name={name} email={email} status={status} category={category}  />
        </Container>
    )
}
const Container = styled.div`
height: auto;
`
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
`
const Div = styled.div`
text-transform: uppercase;
color: grey;
font-size: 14px;
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
&[placeholder]{
    font-size: 12px;
}
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
font-size: 12px;
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
cursor: pointer;
`
const SearchTitle = styled.span`

`

export default Home
