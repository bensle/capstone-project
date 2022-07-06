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
    setActivities(activities);
  }

  function filterTypeReset() {
    setTypeFiltervalue('all');
    setActivities(activities);
  }
  //----- -----
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
          onSetIsHidden={setIsHidden}
        />
      )}
      {isHidden && (
        <FavoritesPage activities={activities} favorite={favorite} isHidden={isHidden} onSetIsHidden={setIsHidden} />
      )}
    </Appcontainer>
  );
}
const Appcontainer = styled.div`
  display: grid;
  height: 100vh;
  align-content: start;
`;
