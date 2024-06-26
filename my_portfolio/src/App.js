import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Homepage from './Pages/Homepage';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Homepage/>}></Route>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
