import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Signup from "./Varify/Signup"
import Login from "./Varify/Login"

import SideBar from './Components/aside/Sidebar'
import Dashboard from "../src/Components/Pages/Dashboard"

import ListClass from "../src/Components/Pages/ListClass"
import ViewClass from "../src/Components/Pages/ViewClass"

import ListStudent from "../src/Components/Pages/ListStudent"
import ViewStudent from "../src/Components/Pages/ViewStudent"

import ListTrainer from "../src/Components/Pages/ListTrainer"
import ViewTrainer from "../src/Components/Pages/ViewTrainer"


function App() {

  return (
    <div className='appDiv'>
      <SideBar />
      <BrowserRouter>
        <Routes>
          <Route path='/signup' element={<Signup />} />
          <Route path='/login' element={<Login />} />

          <Route path='/dashboard' element={<Dashboard />} />

          <Route path='/listclass' element={<ListClass />} />
          <Route path='/viewclass' element={<ViewClass />} />

          <Route path='/liststudent' element={<ListStudent />} />
          <Route path='/viewstudent' element={<ViewStudent />} />

          <Route path='/listtrainer' element={<ListTrainer />} />
          <Route path='/viewtrainer' element={<ViewTrainer />} />
        </Routes>
      </BrowserRouter>

    </div>
  )
}

export default App
