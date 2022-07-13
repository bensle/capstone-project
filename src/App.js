import {useState} from 'react';
import {Route, Routes} from 'react-router-dom';
import styled from 'styled-components';

import Header from './components/Header/Header';
import useLocalStorage from './hooks/useLocalStorage';
import ActivityPage from './pages/ActivityPage';
import AddActivityPage from './pages/AddActivityPage';
import FavoritesPage from './pages/FavoritesPage';
import Map from './pages/Map';
import db from './services/activityDB';

export default function App() {
  const [activities, setActivities] = useLocalStorage('activities', db);
  const [typeFilterValue, setTypeFiltervalue] = useState('all');
  const [durationFilterValue, setDurationFilterValue] = useState('all');
  const [showModalConfirmation, setShowModalConfirmation] = useState({show: false, id: null});

  //----- Filter (Duration & Type) -----------------------------------------------------------------------------------------
  const filteredActivities = activities.filter(data => {
    return (
      (durationFilterValue === 'all' && typeFilterValue === 'all') ||
      ((data.duration === durationFilterValue || durationFilterValue === 'all') &&
        (data.type === typeFilterValue || typeFilterValue === 'all'))
    );
  });
  function filterDurationReset() {
    setDurationFilterValue('all');
  }
  function filterTypeReset() {
    setTypeFiltervalue('all');
  }
  //----- Toggle Favorites & set to state/localstorage -----------------------------------------------------------------------------------------
  const toggleFavorites = id => {
    const index = activities.findIndex(activity => activity.id === id);
    const newFavorite = activities.find(activity => activity.id === id);
    const tempFavorites = [
      ...activities.slice(0, index),
      {...newFavorite, isFavorite: !newFavorite.isFavorite},
      ...activities.slice(index + 1),
    ];
    setActivities(tempFavorites);
  };

  //----- handle delete Activities & confirmation Modal -----------------------------------------------------------------------------------------

  function deleteActivity(id) {
    if (showModalConfirmation.show && showModalConfirmation.id) {
      const newActivities = activities.filter(acti => acti.id !== showModalConfirmation.id);
      setActivities(newActivities);
      setShowModalConfirmation({
        show: false,
        id: null,
      });
    }
  }
  const showModalConfirmationHandler = id => {
    setShowModalConfirmation({show: true, id});
  };
  const closeModalConfirmationHandler = () => {
    setShowModalConfirmation({show: false, id: null});
  };

  return (
    <Appcontainer>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <ActivityPage
              activities={filteredActivities}
              onSetActivities={setActivities}
              onToggleFavorites={toggleFavorites}
              onCloseConfirmationModal={closeModalConfirmationHandler}
              onShowConfirmationHandler={showModalConfirmationHandler}
              onDeleteActivity={deleteActivity}
              showModalConfirmation={showModalConfirmation}
              onFilterTypeReset={filterTypeReset}
              onFilterTypeValue={setTypeFiltervalue}
              onFilterDurationReset={filterDurationReset}
              onFilterDurationValue={setDurationFilterValue}
            />
          }
        />
        <Route
          path="/activities"
          element={
            <ActivityPage
              activities={filteredActivities}
              onSetActivities={setActivities}
              onToggleFavorites={toggleFavorites}
              onCloseConfirmationModal={closeModalConfirmationHandler}
              onShowConfirmationHandler={showModalConfirmationHandler}
              onDeleteActivity={deleteActivity}
              showModalConfirmation={showModalConfirmation}
              onFilterTypeReset={filterTypeReset}
              onFilterTypeValue={setTypeFiltervalue}
              onFilterDurationReset={filterDurationReset}
              onFilterDurationValue={setDurationFilterValue}
            />
          }
        />
        <Route
          path="/favorites"
          element={
            <FavoritesPage
              activities={activities}
              onToggleFavorites={toggleFavorites}
              onCloseConfirmationModal={closeModalConfirmationHandler}
              onShowConfirmationHandler={showModalConfirmationHandler}
              onDeleteActivity={deleteActivity}
              showModalConfirmation={showModalConfirmation}
            />
          }
        />
        <Route path="/map" element={<Map />} />
        <Route path="/addActivity" element={<AddActivityPage onSetActivities={setActivities} />} />
      </Routes>
    </Appcontainer>
  );
}
const Appcontainer = styled.div`
  display: grid;
  height: 100vh;
  align-content: start;
`;
