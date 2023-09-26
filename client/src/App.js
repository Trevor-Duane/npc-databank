import { BrowserRouter, Routes, Route } from 'react-router-dom';

// pages
import Home from './pages/Home';
import Population from './pages/Population';
import Economy from './pages/Economy';
import Health from './pages/Health';
import Metadata from './pages/Metadata';
import Districtdata from './pages/Districtdata';
import DocReports from './pages/DocReports';
// components
import Sidebar from './components/sidebar/Sidebar';

// css
import "./App.css";
import MyFooter from './components/Footer/MyFooter';


function App() {
  return (
      <BrowserRouter>
      <Sidebar>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/population_indicators/population" element={<Population/>}/>
        <Route path="/population_indicators/economy" element={<Economy/>}/>
        <Route path="/population_indicators/health" element={<Health/>}/>
        <Route path="/metadata" element={<Metadata/>}/>
        <Route path="/districtdata" element={<Districtdata/>}/>
        <Route path="/docsandreports" element={<DocReports/>}/>
        <Route path="*" element={<> not found </>}/>
      </Routes>
      </Sidebar>
      </BrowserRouter>
  );
}

export default App;
