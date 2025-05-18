import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './Pages/Home';
import About_Us from './Pages/About_Us';
import Aeolus_Vr from './Pages/Aeolus_Vr';
import SignUp from './Pages/Sign_Up';
import './App.css'

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/About_Us" element={<About_Us/>}/>
          <Route path="/Projects/Aeolus_Vr" element={<Aeolus_Vr/>}/>
          <Route path="/Sign_Up" element={<SignUp/>}/>
        </Routes>
      </Router>
    </>
  )
}
export default App;