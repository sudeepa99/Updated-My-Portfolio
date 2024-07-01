import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Homepage from './Pages/Homepage';
import { ParallaxProvider } from 'react-scroll-parallax';
import About from './Components/About';

function App() {
  return (
    <ParallaxProvider>
      <div>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Homepage />} />
            <Route path='/about' element={<About />} />
          </Routes>
        </BrowserRouter>
      </div>
    </ParallaxProvider>
  );
}

export default App;
