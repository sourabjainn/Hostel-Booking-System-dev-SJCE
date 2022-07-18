import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';

import { BrowserRouter , Routes, Route , link} from 'react-router-dom';
import Homescreen from './screens/Homescreen';
import Bookingscreen from './screens/Bookingscreen';
import Registerscreen from './screens/Registerscreen';
import Loginscreen from './screens/Loginscreen';
import Profilescreen from './screens/Profilescreen';
import Adminscreen from './screens/Adminscreen';
import Landingscreen from './screens/Landingscreen';
import Aboutscreen from './screens/Aboutscreen';
import ContactScreen from './screens/ContactScreen';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <BrowserRouter>
        <Routes>
          <Route path="home" element={<Homescreen/>} />
          <Route path="book/:roomid" element={<Bookingscreen/>} /> 
          <Route path="register" element={<Registerscreen/>} />
          <Route path="login" element={<Loginscreen/>} />
          <Route path="profile" element={<Profilescreen/>} />
          <Route path="admin" element={<Adminscreen/>} />
          <Route path="about" element={<Aboutscreen/>} />
          <Route path="" element={<Landingscreen/>} />
          <Route path="contact" element={<ContactScreen/>} />
        </Routes>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
