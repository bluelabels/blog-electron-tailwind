import { MemoryRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Hello from '../hello/Hello';
import DarkModeButton from './nav/DarkModeButton';

export default function App() {
  return (
    <div>
      <DarkModeButton />
      <Router>
        <Routes>
          <Route path="/" element={<Hello />} />
        </Routes>
      </Router>
    </div>
  );
}
