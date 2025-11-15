import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/me" element={<Home />} />
        <Route path="/q-and-a" element={<Home />} />
        <Route path="/examples" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
