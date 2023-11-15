import React from 'react'
import { BrowserRouter as Router, Routes, Route} from "react-router-dom"

import Home from "./pages/Home.jsx"
import About from "./pages/About.jsx"
import SignUp from "./pages/SignUp.jsx"
import SignIn from "./pages/SignIn.jsx"
import Profile from "./pages/Profile.jsx"

import Header from "./components/Header.jsx"
import PrivateRouter from "./components/PrivateRouter.jsx"

function App() {
  return (
    <>
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />}/>
          <Route path="/SignIn" element={<SignIn />}/>
          <Route path="/SignUp" element={<SignUp />}/>
          <Route element= {<PrivateRouter />} >
            <Route path="/Profile" element={<Profile />}/>
          </Route>
            <Route path="*" element={<div>Page not Found</div>}/>
        </Routes>
      </Router>
    </div>

    </>
  )
}

export default App