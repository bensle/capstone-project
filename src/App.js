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

  //----- Filter (Duration & Type) -----
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
  //-----HandleFavorites -----
  // const addToFavorites = id => {
  //   if (!favorite.includes(id)) setFavorite(favorite.concat(id));
  // };

  function baddToFavorites(id) {
    const newFavorite = activities.find(acti => acti.id !== id);
    if (!favorite.includes(id)) setFavorite(favorite.concat(id));
    setSavedFavorites([...savedFavorites, newFavorite]);
    console.log(savedFavorites);
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
          onAddToFavorites={baddToFavorites}
          onRemoveFromFavorites={removeFromFavorites}
        />
      )}
      {isHidden && (
        <FavoritesPage
          savedFavorites={savedFavorites}
          activities={activities}
          favorite={favorite}
          onSetIsHidden={() => setIsHidden(!isHidden)}
          onRemoveFromFavorites={removeFromFavorites}
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
