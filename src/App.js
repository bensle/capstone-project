import {useState} from 'react';
import styled from 'styled-components';

import ActivityCards from './components/ActivityCard/ActivityCards';
import DurationFilter from './components/DurationFilterButton/DurationFilter';
import TypeFilter from './components/TypeFilterButton/TypeFilter';
import db from './lib/activityDB';

export default function ActivityApp() {
  const [activities, setActivities] = useState(db);

  //-----DurationFilter.js-----
  function filterDuration(duration) {
    const results = db.filter(currentData => {
      return currentData.duration === duration;
    });
    setActivities(results);
  }
  function filterDurationReset() {
    setActivities(db);
  }
  //-----TypeFilter.js-----
  function filterType(type) {
    const results = db.filter(currentData => {
      return currentData.type === type;
    });
    setActivities(results);
  }
  function filterTypeReset() {
    setActivities(db);
  }

  return (
    <Appcontainer>
      <DurationFilter
        activities={activities}
        onFilterDuration={filterDuration}
        onFilterDurationReset={filterDurationReset}
      />
      <TypeFilter activities={activities} onFilterType={filterType} onFilterTypeReset={filterTypeReset} />
      <ActivityCards activities={activities} />
    </Appcontainer>
  );
}
const Appcontainer = styled.div`
  display: grid;
  height: 100vh;
`;
