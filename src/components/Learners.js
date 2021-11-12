import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { learners } from '../DummyData'
import Learner from './Learner'
import LearnersFooter from './LearnersFooter'
import LearnersProfile from './LearnersProfile'

const Learners = () => {
    const [users, setUsers] = useState([])
    const [showProfile, setShowProfile] = useState("hide")

    const handleClick = () => {
        switch (showProfile) {
            case "open":
                setShowProfile("hide")
                break;
            case "hide":
                setShowProfile("open")
                break;
            default: setShowProfile("hide")
                break;
        }
    }

    useEffect(() => {
        setUsers(learners);
        console.log(learners);
    }, [])
    return (
        <>
            <LearnerContainer>
                <Table className="table">
                    <Tr>
                        <Th>User</Th>
                        <Th>Email</Th>
                        <Th>Last Login</Th>
                        <Th>Case Manager</Th>
                        <Th>Tags</Th>
                        <Th>Intervention</Th>
                    </Tr>
                    {
                        users.slice(0, 7).map((user) => (
                            <Learner item key={user.id} user={user} handleClick={handleClick} />
                        ))
                    }
                </Table>
            </LearnerContainer>
            <LearnersProfile showProfile={showProfile} handleClick={handleClick} />
            <LearnersFooter />
        </>
    )
}

const LearnerContainer = styled.div`
width: 1150px;
height: calc( 100vh - 165px);
margin: 0px auto;
margin-top: 10px;
position: relative;
.user{
    display: flex;
    align-items: center;
}
.caseManger{
    color: #0B35B3 ;
    font-size: 13px;
    font-weight: bold;
}
.icon{
    font-size: 14px;
    color: blue ;
}
`
const Table = styled.table`
width: 100%;
background-color: white;

`

const Th = styled.th`
padding:7px 5px ;
color: gray;
font-size: 14px;
font-weight: 400;
`
const Tr = styled.tr`
padding:0px 5px ;
border-bottom: 0.5px solid grey;
`


export default Learners
