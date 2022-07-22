import {Route, Routes} from 'react-router-dom';

import ActivityPage from './pages/ActivityPage';
import AddActivityPage from './pages/AddActivityPage';
import FavoritesPage from './pages/FavoritesPage';
import Map from './pages/Map';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<ActivityPage />} />
      <Route path="/favorites" element={<FavoritesPage />} />
      <Route path="/map" element={<Map />} />
      <Route path="/addActivity" element={<AddActivityPage />} />
    </Routes>
  );
}
