import {useState} from 'react';
import styled from 'styled-components';

import ActivityCards from './components/ActivityCard/ActivityCards';
import DurationFilter from './components/DurationFilterButton/DurationFilter';
import TypeFilter from './components/TypeFilterButton/TypeFilter';
import db from './lib/activityDB';
import FavoritesPage from './pages/FavoritesPage';

export default function ActivityApp() {
  const [activities, setActivities] = useState(db);
  const [typeFilterValue, setTypeFiltervalue] = useState('all');
  const [durationFilterValue, setDurationFilterValue] = useState('all');
  const [favorite, setFavorite] = useState([]);
  const [isHidden, setIsHidden] = useState(false);

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
  const addToFavorites = id => {
    if (!favorite.includes(id)) setFavorite(favorite.concat(id));
  };

  const removeFromFavorites = id => {
    const index = favorite.indexOf(id);
    console.log(index);
    const temp = [...favorite.slice(0, index), ...favorite.slice(index + 1)];
    setFavorite(temp);
  };
  return (
    <Appcontainer>
      {isHidden === false && (
        <DurationFilter onFilterDurationReset={filterDurationReset} onFilterDurationValue={setDurationFilterValue} />
      )}
      {isHidden === false && <TypeFilter onFilterTypeReset={filterTypeReset} onFilterTypeValue={setTypeFiltervalue} />}
      {isHidden === false && (
        <ActivityCards
          activities={filteredActivities}
          onSetActivities={setActivities}
          favorite={favorite}
          onSetFavorite={setFavorite}
          isHidden={isHidden}
          onSetIsHidden={() => setIsHidden(!isHidden)}
          onAddToFavorites={addToFavorites}
        />
      )}

      {isHidden && (
        <FavoritesPage
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
