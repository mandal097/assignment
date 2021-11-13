import React from 'react'
// import UpdateInfo from './pages/UpdateInfo'
import { Routes, Route } from 'react-router'
import GeneralInfo from './components/UpdateGeneralInfo'
import Home from './pages/Home'
import UpdateInfo from './pages/UpdateInfo'
import PersonalInfo from './components/UpdatePersonalInfo'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/*">
          <Route index element={<Home />} />
          <Route path="update/*" element={<UpdateInfo />} >
            <Route path="general-info" element={<GeneralInfo />} />
            <Route path="personal-info" element={<PersonalInfo />} />
          </Route>
        </Route>
      </Routes>
    </div>
  )
}

export default App
