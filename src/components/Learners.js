import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { learners } from '../DummyData'
import Learner from './Learner'
import LearnersFooter from './LearnersFooter'

const Learners = () => {
    const [users, setUsers] = useState([])

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
                        users.slice(0,7).map((user) => (
                            <Learner item key={user.id} user={user} />

                        ))
                    }
                    {/* <Tr>
                    <Td className="user">
                        <UserWrap>
                            <Username >amarnath</Username>
                            <Usercontact>contact</Usercontact>
                        </UserWrap>
                        <i class="fas fa-check-circle active"></i>
                    </Td>
                    <Td >
                        <i class="fas fa-envelope icon"></i>
                        <Span>amaraht@dummy.cok</Span>
                    </Td>
                    <Td>
                        <i class="far fa-user icon"></i>
                        <Span>12 baje thha</Span>
                    </Td>
                    <Td className="caseManger">case marnat is tha </Td>
                    <Td><Span>here is the </Span></Td>
                    <Td >
                        <InterventionSpan>View Details</InterventionSpan>
                        <i class="fas fa-ellipsis-v menuIcon"></i>
                    </Td>
                </Tr> */}
                </Table>
            </LearnerContainer>
            <LearnersFooter />
        </>
    )
}

const LearnerContainer = styled.div`
width: 1150px;
height: calc( 100vh - 165px);
margin: 0px auto;
margin-top: 10px;
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
// const Usercontact = styled.span`
// color: grey;
// font-size: 12px;
// font-weight: 400;
// `
// const Span = styled.span`
// color: grey;
// font-size: 14px;
// font-weight: 400;
// `
// const Username = styled.span`
// color: black;
// font-size: 15px;
// font-weight: 600;
// `
// const InterventionSpan = styled.span`
// height: 30px;
// width: 70px !important;
// background: lightgreen !important;
// border:  none;
// font-weight: bold;
// color: white;
// font-size: 12px;
// font-weight: bold;
// border-radius: 5px;

// `

const Th = styled.th`
padding:7px 5px ;
color: gray;
font-size: 14px;
font-weight: 400;
`
const Tr = styled.tr`
padding:0px 5px ;
border-bottom: 0.5px solid grey;
// `
// const Td = styled.td`
// padding:7px 5px ;
// .menuIcon{
//     color: #0B35B3;
// }
// .active{
//     color:#0B35B3 ;
// }
// .notActive{
//     color: lightskyblue;
// }
// `
// const UserWrap = styled.div`
// display: flex;
// flex-direction: column;
// `

export default Learners













































// const Learners = () => {


//     return (
//         <Container>
//             {/* <Learners /> */}
//            
//         </Container>
//     )
// }
// const Container = styled.div`

// `

// export default Learners
