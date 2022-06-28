import {useState} from 'react';
import styled from 'styled-components';

import ActivityCards from './components/ActivityCard/ActivityCards';
import DurationFilter from './components/DurationFilterButton/DurationFilter';
import db from './lib/activityDB';

export default function ActivityApp() {
  const [activities, setActivities] = useState(db);

  return (
    <Appcontainer>
      <DurationFilter activities={activities} setActivities={setActivities} />
      <ActivityCards activities={activities} />
    </Appcontainer>
  );
}
const Appcontainer = styled.div`
  display: grid;
  height: 100vh;
`;
