import {useEffect, useState} from 'react';
import styled from 'styled-components';

import ActivityCards from './components/ActivityCard/ActivityCards';
import DurationFilter from './components/DurationFilterButton/DurationFilter';
import TypeFilter from './components/TypeFilterButton/TypeFilter';
import useLocalStorage from './hooks/useLocalStorage';
import FavoritesPage from './pages/FavoritesPage';
import db from './services/activityDB';

export default function App() {
  const [activities, setActivities] = useLocalStorage('activities', db);
  const [typeFilterValue, setTypeFiltervalue] = useState('all');
  const [durationFilterValue, setDurationFilterValue] = useState('all');
  const [favorite, setFavorite] = useState([]);
  const [isHidden, setIsHidden] = useState(false);
  const [savedFavorites, setSavedFavorites] = useLocalStorage('Favorites', []);

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
  //-----HandleFavorites ---------------------------------------------------------------------------------------------------
  // const addToFavorites = id => {
  //   if (!favorite.includes(id)) setFavorite(favorite.concat(id));
  // };

  const toggleFavorite = id => {
    const index = activities.findIndex(el => el.id === id); // returns the index of element of activities
    const newFavorite = activities.find(acti => acti.id === id); // returns the value of element of activties

    const tempFavorites = [
      ...activities.slice(0, index), //slice activities from 0 to found index
      {...newFavorite, isFavorite: !newFavorite.isFavorite}, // sets the found value inbetween and toggles isFavorite
      ...activities.slice(index + 1), //rest of activities from found index +1
    ];
    setActivities(tempFavorites); // sets state with new array
    console.log('newFav', newFavorite);
  };

  function baddToFavorites(id) {
    const newFavorite = activities.find(acti => acti.id !== id);
    if (!favorite.includes(id)) setFavorite(favorite.concat(id));
    setSavedFavorites([...savedFavorites, newFavorite]);
    console.log(favorite);
  }

  const removeFromFavorites = id => {
    const index = favorite.indexOf(id);
    const tempFavorites = [...favorite.slice(0, index), ...favorite.slice(index + 1)];
    setFavorite(tempFavorites);
  };

  useEffect(
    () => setSavedFavorites(() => activities.filter(activity => favorite.includes(activity.id))),
    [activities, favorite] // eslint-disable-line react-hooks/exhaustive-deps
  );

  return (
    <Appcontainer>
      {isHidden || (
        <DurationFilter onFilterDurationReset={filterDurationReset} onFilterDurationValue={setDurationFilterValue} />
      )}
      {isHidden || <TypeFilter onFilterTypeReset={filterTypeReset} onFilterTypeValue={setTypeFiltervalue} />}
      {isHidden || (
        <ActivityCards
          activities={filteredActivities}
          onSetActivities={setActivities}
          favorite={favorite}
          onSetIsHidden={() => setIsHidden(!isHidden)}
          onAddToFavorites={toggleFavorite}
          onRemoveFromFavorites={toggleFavorite}
        />
      )}
      {isHidden && (
        <FavoritesPage
          savedFavorites={savedFavorites}
          activities={activities}
          favorite={favorite}
          onSetIsHidden={() => setIsHidden(!isHidden)}
          onRemoveFromFavorites={toggleFavorite}
        />
      )}
    </Appcontainer>
  );
}
const Appcontainer = styled.div`
  display: grid;
  height: 100vh;
  align-content: start;
`;
