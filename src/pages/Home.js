import React, { useState } from 'react'
import Header from '../components/Header'
import Learners from '../components/Learners'

const Home = () => {
    const [name , setName] = useState('amarnnth')
    return (
        <>
           <Header name={name} setname={setName}/>
           <Learners/>
        </>
    )
}

export default Home
