import React from 'react'

import styled from 'styled-components'
const Learner = ({user}) => {
    console.log(user);
    return (
        // <LearnerContainer>
        //     <Table className="table">
        //         <Tr>
        //             <Th>User</Th>
        //             <Th>Email</Th>
        //             <Th>Last Login</Th>
        //             <Th>Case Manager</Th>
        //             <Th>Tags</Th>
        //             <Th>Intervention</Th>
        //         </Tr>
                <Tr>
                    <Td className="user">
                        <UserWrap>
                            <Username >{user.name}</Username>
                            <Usercontact>{user.contact}</Usercontact>
                        </UserWrap>
                        <i class="fas fa-check-circle active"></i>
                    </Td>
                    <Td >
                        <i class="fas fa-envelope icon"></i>
                        <Span>{user.email}</Span>
                    </Td>
                    <Td>
                        <i class="far fa-user icon"></i>
                        <Span>{user.lastLogin}</Span>
                    </Td>
                    <Td className="caseManger">{user.caseManager} </Td>
                    <Td><Span>{user.tags}</Span></Td>
                    <Td >
                        <InterventionSpan>View Details</InterventionSpan>
                        <i class="fas fa-ellipsis-v menuIcon"></i>
                    </Td>
                </Tr>
        //     </Table>
        // </LearnerContainer>
    )
}

// const LearnerContainer = styled.div`
// width: 1150px;
// margin: 0px auto;
// background-color: white;
// .user{
//     display: flex;
//     align-items: center;
// }
// .caseManger{
//     color: #0B35B3 ;
//     font-size: 13px;
//     font-weight: bold;
// }
// .icon{
//     font-size: 14px;
//     color: blue ;
// }
// `
// const Table = styled.table`
// width: 100%;

// `
const Usercontact = styled.span`
color: grey;
font-size: 12px;
font-weight: 400;
`
const Span = styled.span`
color: grey;
font-size: 14px;
font-weight: 400;
`
const Username = styled.span`
color: black;
font-size: 15px;
font-weight: 600;
`
const InterventionSpan = styled.span`
height: 30px;
width: 70px !important;
background: #34A770 !important;
border:  none;
font-weight: bold;
color: white;
font-size: 12px;
font-weight: bold;
border-radius: 5px;
`

// const Th = styled.th`
// padding:7px 5px ;
// color: gray;
// font-size: 14px;
// font-weight: 400;
// `
const Tr = styled.tr`
padding:0px 5px ;
border-bottom: 0.5px solid grey;
`
const Td = styled.td`
padding:0px 5px ;
.menuIcon{
    color: #0B35B3;
}
.active{
    color:teal ;
}
.notActive{
    color: lightskyblue;
}
`
const UserWrap = styled.div`
display: flex;
width: 86%;
flex-direction: column;
justify-content: space-between;
`

export default Learner
