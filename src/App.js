
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Universities from './Universities';

function App() {
  return (
    <>
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/Universities" element={<Universities />} />      
        </Routes>
      </div>
    </BrowserRouter>
    </>
  );
}

export default App;

