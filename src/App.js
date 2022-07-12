import {useState} from 'react';
import styled from 'styled-components';

import ActivityCards from './components/ActivityCard/ActivityCards';
import DurationFilter from './components/DurationFilterButton/DurationFilter';
import TypeFilter from './components/TypeFilterButton/TypeFilter';
import useLocalStorage from './hooks/useLocalStorage';
import FavoritesPage from './pages/FavoritesPage';
import Map from './pages/Map';
import db from './services/activityDB';

export default function App() {
  const [activities, setActivities] = useLocalStorage('activities', db);
  const [typeFilterValue, setTypeFiltervalue] = useState('all');
  const [durationFilterValue, setDurationFilterValue] = useState('all');
  const [currentPage, setCurrentPage] = useState('activity');
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
      {currentPage === 'activity' && (
        <DurationFilter onFilterDurationReset={filterDurationReset} onFilterDurationValue={setDurationFilterValue} />
      )}
      {currentPage === 'activity' && (
        <TypeFilter onFilterTypeReset={filterTypeReset} onFilterTypeValue={setTypeFiltervalue} />
      )}
      {currentPage === 'activity' && (
        <ActivityCards
          activities={filteredActivities}
          onSetActivities={setActivities}
          onSetIsHidden={() => setCurrentPage('favorites')}
          onSetIsHidden1={() => setCurrentPage('map')}
          onToggleFavorites={toggleFavorites}
          onCloseConfirmationModal={closeModalConfirmationHandler}
          onShowConfirmationHandler={showModalConfirmationHandler}
          onDeleteActivity={deleteActivity}
          showModalConfirmation={showModalConfirmation}
        />
      )}
      {currentPage === 'favorites' && (
        <FavoritesPage
          activities={activities}
          onSetIsHidden={() => setCurrentPage('activity')}
          onToggleFavorites={toggleFavorites}
          onCloseConfirmationModal={closeModalConfirmationHandler}
          onShowConfirmationHandler={showModalConfirmationHandler}
          onDeleteActivity={deleteActivity}
          showModalConfirmation={showModalConfirmation}
        />
      )}
      {currentPage === 'map' && <Map onSetIsHidden={() => setCurrentPage('activity')} />}
    </Appcontainer>
  );
}
const Appcontainer = styled.div`
  display: grid;
  height: 100vh;
  align-content: start;
`;
