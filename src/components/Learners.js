import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { learners } from '../DummyData'
import Learner from './Learner'
import LearnersFooter from './LearnersFooter'
import LearnersProfile from './LearnersProfile'

const Learners = ({ name, email, status }) => {
    // states 
    const [users, setUsers] = useState([])
    const [showProfile, setShowProfile] = useState("hide")
    const [userPerPage, setUserPerPage] = useState(8)
    const [currentPage, setCurrentPage] = useState(1)
    const [filteredUser, setFilteredUser] = useState([]);
    // const [disabled , setDisabled] = useState(true)
    // adjusting users rows
    const [rows, setRows] = useState('')

    // fetching data from dummydata 
    useEffect(() => {
        const fetchDummydata = () => {
            setUsers(learners);
        }
        fetchDummydata()
        // console.log(learners);
    }, [users])
    // variables
    const indexLast = currentPage * userPerPage;
    const indexFirst = indexLast - userPerPage;
    const currentUsers = users.slice(indexFirst, indexLast)


    // total users in page
    const totalUsers = users.length;
    const pages = Math.ceil(totalUsers / userPerPage)

    // paginatation functions
    const nextPage = () => {
        if (currentPage < pages) {
            setCurrentPage(currentPage + 1)
        } else {
            setCurrentPage(pages)
        }

    }
    const prevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1)
        } else {
            setCurrentPage(1)
        }
    }

    // function to handle learners profile
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


    // filtering users 
    // filtering on email and name
    useEffect(() => {
        const filtering = () => {
            const filterByNameArr = currentUsers.filter((user) => {
                if (email === "") {
                    return user
                } else if (user.email.toLowerCase().includes(email.toLowerCase())) {
                    return user
                }
                return false;
            })
            const filterByEmailArr = currentUsers.filter((user) => {
                if (name === "") {
                    return user
                } else if (user.name.toLowerCase().includes(name.toLowerCase())) {
                    return user
                }
                return false;
            })

            if (!name) {
                setFilteredUser(filterByNameArr)
            }
            else {
                setFilteredUser(filterByEmailArr)
            }
        }
        filtering()
    }, [name, email])

    // to find no. of active users
    const active = currentUsers.filter(u => u.active === true).length;
    const activeArr = currentUsers.filter(u => u.active === true)
    const offlineArr = currentUsers.filter(u => u.active === false)
    useEffect(() => {
        const filteringActiveUsers = () => {
            if (status === "active") {
                setFilteredUser(activeArr)
            } else if (status === "offline") {
                setFilteredUser(offlineArr)
            }
        }
        filteringActiveUsers()
    }, [status])

    return (
        <>
            <LearnerContainer >
                <Table className="table">
                    <Tr>
                        <Th>User</Th>
                        <Th>Email</Th>
                        <Th>Last Login</Th>
                        <Th>Case Manager</Th>
                        <Th>Tags</Th>
                        <Th>Intervention</Th>
                    </Tr>

                    {status || name || email ?
                        filteredUser.map((u => (
                            <Learner item key={u.id} user={u} handleClick={handleClick} />
                        )))
                        :
                        currentUsers.map((u => (
                            <Learner item key={u.id} user={u} handleClick={handleClick} />
                        )))
                    }
                </Table>
            </LearnerContainer>
            <LearnersProfile showProfile={showProfile} handleClick={handleClick} setShowProfile={setShowProfile} />
            <LearnersFooter
                indexFirst={indexFirst}
                indexLast={indexLast}
                currentUsers={currentUsers}
                setCurrentPage={setCurrentPage}
                currentPage={currentPage}
                totalUsers={totalUsers}
                userPerPage={userPerPage}
                setUserPerPage={setUserPerPage}
                active={active}
                nextPage={nextPage}
                prevPage={prevPage}
                setRows={setRows}
                rows={rows}
            // disabled={disabled}
            />
        </>
    )
}

const LearnerContainer = styled.div`
width: 1150px;
min-height: calc( 100vh - 165px);
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
