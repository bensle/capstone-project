import {useState} from 'react';
import styled from 'styled-components';

import ActivityCards from './components/ActivityCard/ActivityCards';
import DurationFilter from './components/DurationFilterButton/DurationFilter';
import TypeFilter from './components/TypeFilterButton/TypeFilter';
import db from './lib/activityDB';

export default function ActivityApp() {
  const [activities, setActivities] = useState(db);
  const [typeFilterValue, setTypeFiltervalue] = useState('all');
  const [durationFilterValue, setDurationFilterValue] = useState('all');

  //----- Filter (Duration & Type) -----
  const filteredAll = db.filter(data => {
    return (
      (durationFilterValue === 'all' && typeFilterValue === 'all') ||
      ((data.duration === durationFilterValue || durationFilterValue === 'all') &&
        (data.type === typeFilterValue || typeFilterValue === 'all'))
    );
  });

  function filterDurationReset() {
    setDurationFilterValue('all');
    setActivities(db);
  }

  function filterTypeReset() {
    setTypeFiltervalue('all');
    setActivities(db);
  }
  //----- -----
  return (
    <Appcontainer>
      <DurationFilter onFilterDurationReset={filterDurationReset} onFilterDurationValue={setDurationFilterValue} />
      <TypeFilter onFilterTypeReset={filterTypeReset} onFilterTypeValue={setTypeFiltervalue} />
      <ActivityCards activities={filteredAll} />
    </Appcontainer>
  );
}
const Appcontainer = styled.div`
  display: grid;
  height: 100vh;
  align-content: start;
`;
