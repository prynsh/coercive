import { Routes, Route } from 'react-router-dom';
import Home from './components/Home'; // Create this component
import Experience from './components/Experience';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/experience" element={<Experience />} />
    </Routes>
  );
}

export default App;
