import React from 'react'
import SelectSchedule from './SelectSchedule'
import TravelSchedule from './TravelSchedule'
import Mypage from './Mypage'
import Curator from './Curator'
import { Route, Routes } from 'react-router-dom'

const Main = () => {
  return (
    <Routes>
      <Route path='/select'  element={<SelectSchedule></SelectSchedule>}></Route>
      <Route path='/travel'  element={<TravelSchedule></TravelSchedule>}></Route>
      <Route path='/myPage'  element={<Mypage></Mypage>}></Route>
      <Route path='/curator' element={<Curator></Curator>}></Route>
    </Routes>
  )
}

export default Main