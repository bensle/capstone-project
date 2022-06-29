import {useState} from 'react';
import styled from 'styled-components';

import ActivityCards from './components/ActivityCard/ActivityCards';
import DurationFilter from './components/DurationFilterButton/DurationFilter';
import db from './lib/activityDB';

export default function ActivityApp() {
  const [activities, setActivities] = useState(db);

  function filterDuration(duration) {
    const results = db.filter(currentData => {
      return currentData.duration === duration;
    });
    setActivities(results);
  }

  function filterDurationAll() {
    setActivities(db);
  }

  return (
    <Appcontainer>
      <DurationFilter activities={activities} onFilterDuration={filterDuration} onFilterReset={filterDurationAll} />
      <ActivityCards activities={activities} />
    </Appcontainer>
  );
}
const Appcontainer = styled.div`
  display: grid;
  height: 100vh;
`;
