import React from 'react'
import styled from 'styled-components'

const PersonalInfo = () => {
    return (
        <Container>
            <Heading>Edit Personal information</Heading>
            <Form>
                <InputDiv>
                    <Label>Allergic to*</Label>
                    <Input type="text" name="allergicto" placeholder="Allergic to dust" />
                </InputDiv>
                <InputDiv>
                    <Label>Height in cm*</Label>
                    <Input type="text" name="height" placeholder="Example 170 cm" />
                </InputDiv>

                <InputDiv>
                    <Label>Weight in kgs</Label>
                    <Input type="number" name="weight" placeholder="Like 60 kgs " />
                </InputDiv>
                <InputDiv>
                    <Label>SSN</Label>
                    <Input type="number" name="ssn" placeholder="887799779999 " />
                </InputDiv>
                <Label>Select Language</Label>
                <Select name="language" placeholder="hhklahl">
                    <Option value="">Select Language</Option>
                    <Option value="delhi">Delhi</Option>
                    <Option value="mumbai">Mumbai</Option>
                    <Option value="mumbai">Lucknow</Option>
                    <Option value="mumbai">Punjab</Option>
                    <Option value="mumbai">Kolkata</Option>
                </Select>
                <Div>
                    <BtnWrapper>
                        <Close>Close</Close>
                        <UpdateButton>Save and Update</UpdateButton>
                    </BtnWrapper>
                </Div>
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
const Form = styled.form`
width: 100%;
`

const InputDiv = styled.div`
width: 96.7%;
margin: 20px 10px;

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
height: 40px;
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
const Select = styled.select`
width: 99%;
border-radius: 5px;
border: 1.5px solid #E3E3E3;
font-size: 11px;
padding: 5px 10px;
margin-bottom: 20px;
`

const Option = styled.option`
`
const Div = styled.div`
width: 100%;
display: flex;
justify-content: flex-end;

`
const BtnWrapper = styled.div`
display: flex;
align-items: center;
margin-right:0px;
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

export default PersonalInfo
