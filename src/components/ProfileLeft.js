import React from 'react'
import styled from 'styled-components'
const ProfileLeft = () => {
    return (
        <>
             <Details>
                            <Img src="https://media.istockphoto.com/photos/woman-standing-on-city-street-at-night-picture-id130406720?b=1&k=20&m=130406720&s=170667a&w=0&h=RfIUneYKwpizKEGwgMCBGwOBCxzTtTdQ1s6MWBw5QlQ=" alt="" />
                            <Info>
                                <InfoHeading> Christopher Dias</InfoHeading>
                                <P>+11 9900998877</P>
                                <P>James@demoemail.com</P>
                                <P>DOB:<Span>11th october 2021</Span></P>
                                <P>Gender:<Span>Female</Span></P>
                                <P>Adress:<Span>3/8 B 4th Floor,Plot ,Rd ,16/1 Dhaka 1212</Span></P>
                            </Info>
                        </Details>
                        <Records>
                            <Buttons>
                                <PeakBtn>
                                    <Span> Peak</Span>
                                    <i class="fas fa-check-circle active"></i>
                                </PeakBtn>
                                <CongnibleBtn>
                                    <Span> Cognible</Span>
                                    <i class="fas fa-check-circle active"></i>
                                </CongnibleBtn>
                                <ResearchBtn>
                                    <Span>Research Participants</Span>
                                    <i class="fas fa-check-circle notActive"></i>
                                </ResearchBtn>
                            </Buttons>
                            <RecordHeading>Records</RecordHeading>
                            <Record>
                                <Circle className="dash"></Circle>
                                <RecordH>Allergic to:</RecordH>
                                <RecordP>Meats and Nuts</RecordP>
                            </Record>
                            <Record>
                                <Circle className="dash"></Circle>
                                <RecordH>Height:</RecordH>
                                <RecordP>22.3"</RecordP>
                            </Record>
                            <Record>
                                <Circle className="dash"></Circle>
                                <RecordH>Weight (kg):</RecordH>
                                <RecordP>90 </RecordP>
                            </Record>
                            <Record>
                                <Circle className="dash"></Circle>
                                <RecordH>Diagnoses</RecordH>
                                <RecordP>No results available</RecordP>
                            </Record>
                            <Record>
                                <Circle className="dash"></Circle>
                                <RecordH>Date of Diagnoses </RecordH>
                                <RecordP>No results available</RecordP>
                            </Record>
                            <Record>
                                <Circle className="dash"></Circle>
                                <RecordH>SSN/Adhaar</RecordH>
                                <RecordP>897645653421</RecordP>
                            </Record>
                            <Record>
                                <Circle className=""></Circle>
                                <RecordH>Language</RecordH>
                                <RecordP>English | Hindi</RecordP>
                            </Record>
                            <GuardiansInfo>
                                <GuardiansH>Guardians Info</GuardiansH>
                                <P>Guardian's Name : <Span>Cristopher</Span></P>
                                <P>Guardian's cell no. : <Span>+88008866775</Span></P>
                                <P>Father's Name : <Span>Cristopher</Span></P>
                                <P>Father's cell no. : <Span>+88008866775</Span></P>
                                <P>Mother's Name : <Span>Cristopher</Span></P>
                                <P>Mother's cell no. : <Span>+88008866775</Span></P>
                            </GuardiansInfo>
                        </Records>
        </>
    )
}

const Details = styled.div`
display: flex;
height: 110px;
`
const Info = styled.div`
display: flex;
height: 100%;
flex-direction: column;
padding:  0px 10px;
`
const InfoHeading = styled.h4`
font-weight: bold;
font-size: 12px;
`
const Span = styled.span`
color: black;
font-size: 10px;
font-weight: bold;
margin-top:0;
`
const P = styled.p`
height: 2.8px;
font-size: 11px;
font-weight: bold;
font-weight: 400;
color: rgba(0,0,0,0.8);
`

const Img = styled.img`
width: 120px;
height: 100%;
object-fit: cover;

`
const Records = styled.div`
width: 100%;
height: auto;
margin-top: 15px;
padding: 5px 20px;
background-color: white;
border-radius: 5px;
`
const Buttons = styled.div`
display: flex;
align-items: center;
margin-top: 12px;
`
const PeakBtn = styled.div`
border: .3px solid grey;
border-radius:10px;
/* flex: 1; */
display: flex;
align-items: center;
padding: 2px 10px;
margin: 0px 3px;
`
const CongnibleBtn = styled.div`
border: .3px solid grey;
border-radius:10px;
/* flex: 1; */
display: flex;
align-items: center;
padding: 2px 10px;
margin: 0px 3px;
`
const ResearchBtn = styled.div`
border: .3px solid grey;
border-radius:10px;
/* flex: 1.6; */
display: flex;
align-items: center;
padding: 2px 10px;
margin: 0px 3px;
`
const RecordHeading = styled.h3`
font-size: 14px;
font-weight: 600;
color: rgba(0,0,0,07);
margin-top: 15px;
`
const Record = styled.div`
display: flex;
margin: 0px;
padding: 0px;
align-items: center;
.dash::before{
    content: "";
    position: absolute;
    background-color: lightgreen;
    height: 25px;
    width: 2px;
    top: 10px;
    left: 40%;

}
`
const Circle = styled.h4`
height: 10px ;
width: 10px;
border-radius: 50%;
background-color: green;
position: relative;
`
const RecordH = styled.h4`
font-size: 11px;
font-weight: 400;
color: grey;
margin-left: 7px;

`
const RecordP = styled.p`
font-size: 10px;
font-weight: 600;
color: black;
margin-left: auto;
`
const GuardiansInfo = styled.div`
background-color: white;
margin-top: 20px;
`
const GuardiansH = styled.h4`
font-size: 14px;
font-weight: 600;
color: rgba(0,0,0,0.8);
`

export default ProfileLeft
