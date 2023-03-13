import { MemoryRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Hello from '../hello/Hello';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hello />} />
      </Routes>
    </Router>
  );
}
