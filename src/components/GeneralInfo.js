import React from 'react'
import styled from 'styled-components'

const GeneralInfo = () => {
    return (
        <Container>
            <Heading>Edit Basic information</Heading>
            <LogoDiv>
                <LogoIcon><i class="fas fa-cloud-upload-alt"></i></LogoIcon>
                <H6>drag and Drop to upload logo <Br /> <LogoSpan> JPEG, JPG ,PNG etc. </LogoSpan></H6>
            </LogoDiv>
            <Form>
                <FormDiv>
                    <InputDiv>
                        <Label>Firstname*</Label>
                        <Input type="text" name="firstname" placeholder="Enter your first name" />
                    </InputDiv>
                    <InputDiv>
                        <Label>Lastname</Label>
                        <Input type="text" name="lastname" placeholder="Enter your last name" />
                    </InputDiv>
                </FormDiv>
                <FormDiv>
                    <InputDiv>
                        <Label>Client ID</Label>
                        <Input type="number" name="clientId" placeholder="Enter your client id " />
                    </InputDiv>
                    <InputDiv>
                        <Label>Email</Label>
                        <Input type="email" name="email" placeholder="Enter your email address " />
                    </InputDiv>
                </FormDiv>
                <FormDiv>
                    <InputDiv>
                        <Label>Cell no.</Label>
                        <Input type="number" name="number" placeholder="Enter your cell no." />
                    </InputDiv>
                    <InputDiv>
                        <Label>Date of Birth</Label>
                        <Input type="date" name="firstname" placeholder="Enter your DOB" />
                    </InputDiv>
                </FormDiv>
                <FormDiv>
                    <RadioText> Gender</RadioText>
                    <RadioDiv>
                        <Input className="radio" name="gender" type="radio" />
                        <Label>Male</Label>
                    </RadioDiv>
                    <RadioDiv>
                        <Input className="radio" name="gender" type="radio" />
                        <Label>Female</Label>
                    </RadioDiv>
                    <RadioDiv>
                        <Input className="radio" name="gender" type="radio" />
                        <Label>Others</Label>
                    </RadioDiv>
                </FormDiv>
                <Heading>Add Location</Heading>
                <InputDiv>
                    <Label>Street Address</Label>
                    <Input type="text" placeholder="Enter your address" />
                </InputDiv>
                <FormDiv>
                    <InputDiv>
                        <Label>City</Label>
                        <Select name="city" placeholder="hhklahl">
                            <Option value="">Choose your city</Option>
                            <Option value="delhi">Delhi</Option>
                            <Option value="mumbai">Mumbai</Option>
                            <Option value="mumbai">Lucknow</Option>
                            <Option value="mumbai">Punjab</Option>
                            <Option value="mumbai">Kolkata</Option>
                        </Select>
                    </InputDiv>
                    <InputDiv>
                        <Label>State</Label>
                        <Select name="state">
                            <Option value="">Choose your state</Option>
                            <Option value="maharastra">Maharastra</Option>
                            <Option value="rajasthan">Rajasthan</Option>
                            <Option value="West Bangal">West Bangal</Option>
                            <Option value="bihar">Bihar</Option>
                            <Option value="Uttar Pradesh">Uttar Pradesh</Option>
                        </Select>
                    </InputDiv>
                    <InputDiv>
                        <Label>Country</Label>
                        <Select name="country">
                            <Option value="">Choose your country</Option>
                            <Option value="India">India</Option>
                            <Option value="uk">UK</Option>
                            <Option value="usa">USA</Option>
                        </Select>
                    </InputDiv>
                </FormDiv>
                <FormDiv>
                    <InputDiv>
                        <Label>Cell no.</Label>
                        <Input className="zip" type="number" name="number" placeholder="Zip code here" />
                    </InputDiv>
                </FormDiv>
                <FormDiv>
                    <BtnWrapper>
                        <Close>Close</Close>
                        <UpdateButton>Save and Update</UpdateButton>
                    </BtnWrapper>
                </FormDiv>
            </Form>

        </Container>
    )
}
const Container = styled.div`
margin: 13px 20px;
.radio{
    height: 15px;
    width: 30px;
}
.zip{
    width: 50%;
}
`
const Heading = styled.h3`
font-size: 13px;
font-weight: 600;
margin-top: 10px;
margin-bottom: 20px;
`
const LogoDiv = styled.div`
width: 100%;
height: 90px;
border-radius: 5px;
margin-top: 15px;
background-color: #E5EBFF;
display: flex;
align-items: center;
justify-content: center;
`
const LogoIcon = styled.div`
font-size: 40px;
margin-right: 12px;
color: blue;

`
const H6 = styled.h6`
font-weight:bold;
font-size: 12px;
`
const Br = styled.br`
`
const LogoSpan = styled.span`
font-size: 11px;
color: grey;
font-weight:bold;
`
const Form = styled.form`
width: 100%;

`
const FormDiv = styled.div`
display: flex;
width: 100%;
align-items: center;
justify-content: space-between;
margin-top: 15px;

`
const InputDiv = styled.div`
width: 96.7%;
margin: 0px 10px;
`

const Label = styled.label`
margin: 0;
padding: 0;
display: flex;
align-items: center;
justify-content: space-between;
font-size: 11px;
font-weight: bold;
margin-bottom: 2px;
`

const Input = styled.input`
width: 100%;
outline: none;
font-size: 14px;
padding: 0px 10px;
height: 30px;
border: 1.5px solid #E3E3E3;
border-radius: 5px;
&[placeholder]{
    font-size: 11px;
}
`
const RadioText = styled.span`
font-size: 11px;
color: grey;
font-weight: bold;
margin-left: 10px;
`
const RadioDiv = styled.div`
width: 100px;
display: flex;
align-items: center;
justify-content: center;
`
const Select = styled.select`
width: 100%;
border-radius: 5px;
border: 2px solid #E3E3E3;
font-size: 11px;
padding: 5px 10px;
`

const Option = styled.option`
`
const BtnWrapper = styled.div`
display: flex;
align-items: center;
margin-left: auto;
margin-bottom: 20px;

`
const Close = styled.a`
font-size: 11px;
text-decoration: none;
color: black;
cursor: pointer;
`
const UpdateButton = styled.button`
margin-left: 15px;
margin-right: 15px;
height: 30px;
display: flex;
align-items: center;
justify-content: center;
background-color:#0B35B3 ;
color: white;
border: none;
font-size: 10px;
border-radius: 3px;
padding: 0px 10px;
font-weight: bold;

`

export default GeneralInfo
