import { Route, Routes } from 'react-router-dom';
import GameDetail from './components/GameDetail';
import Home from './pages/Home';

export function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/games/*" element={<GameDetail />} />
    </Routes>
  );
}
