import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import IntroSection from './components/IntroSection/IntroSection';
import QandA from './components/QandA/QandA';

function App() {
  return (
    <Router>
      <NavBar />
      <IntroSection />
      <QandA />
    </Router>
  );
}

export default App;
