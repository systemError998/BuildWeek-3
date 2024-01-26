import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from './components/Navbar';
import NavbarScroll from './components/NavbarScroll';

import Homepage from './pages/Homepage';
import ProfilePage from './pages/ProfilePage';
import JobPage from './pages/JobPage';
import NotFoundPage from './pages/NotFoundPage';

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <NavbarScroll />
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/profilepage' element={<ProfilePage />} />
          <Route path='/jobpage' element={<JobPage />} />
          <Route path='*' element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
