import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import { Route,Routes } from 'react-router-dom'
import Home from './pages/Home'
import Landingpage from './pages/Landingpage'
import Watchhistory from './pages/Watchhistory'


function App() {

  return (
    <>
     <Header/>
     <Routes>
      <Route path='/' element={<Landingpage/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path='/watch-history' element={<Watchhistory/>}/>
     </Routes>
     <Footer/>
    </>
  )
}

export default App
