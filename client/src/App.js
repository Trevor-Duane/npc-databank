import logo from './logo.svg';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavigationBar from './components/Navbar/NavigationBar';
import Home from './pages/Home';
import Population from './pages/Population';
import './styles.css'
import Economy from './pages/Economy';
import Health from './pages/Health';
import Metadata from './pages/Metadata';
import Districtdata from './pages/Districtdata';
import DocReports from './pages/DocReports';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavigationBar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/population" element={<Population/>}/>
        <Route path="/economy" element={<Economy/>}/>
        <Route path="/health" element={<Health/>}/>
        <Route path="/metadata" element={<Metadata/>}/>
        <Route path="/districtdata" element={<Districtdata/>}/>
        <Route path="/docsandreports" element={<DocReports/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
