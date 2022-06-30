import {useState} from 'react';
import styled from 'styled-components';

import ActivityCards from './components/ActivityCard/ActivityCards';
import DurationFilter from './components/DurationFilterButton/DurationFilter';
import TypeFilter from './components/TypeFilterButton/TypeFilter';
import db from './lib/activityDB';

export default function ActivityApp() {
  const [activities, setActivities] = useState(db);
  const [durationFilterActive, setDurationFilterActive] = useState(false);
  const [typeFilterActive, setTypeFilterActive] = useState(false);
  const [durationResults, setDurationResults] = useState([]);
  const [typeResults, setTypeResults] = useState([]);

  //-----DurationFilter.js-----
  // function filterDuration(duration) {
  //   const durationResults = db.filter(currentData => {
  //     return currentData.duration === duration;
  //   });
  //   setDurationFilterActive(true);
  //   setActivities(durationResults);
  //   console.log('dures1', durationFilterActive);
  // }

  function filterDurationEX(duration) {
    const results =
      typeFilterActive === true
        ? typeResults.filter(data => {
            return data.duration === duration;
          })
        : durationFilterActive && typeFilterActive === true
        ? activities.type(data => {
            return data.duration === duration;
          })
        : db.filter(data => {
            return data.duration === duration;
          });
    setDurationResults(results);
    setDurationFilterActive(true);
    setActivities(results);

    console.log('durRes', durationFilterActive);
  }

  function filterDurationReset() {
    setActivities(db);
    setDurationFilterActive(false);
  }

  //-----TypeFilter.js-----
  // function filterType(type) {
  //   const typeResults = db.filter(currentData => {
  //     return currentData.type === type;
  //   });
  //   setTypeFilterResults(typeResults);
  //   setActivities(typeResults);
  // }

  function filtertypeEX(type) {
    const results =
      durationFilterActive === true
        ? durationResults.filter(data => {
            return data.type === type;
          })
        : durationFilterActive && typeFilterActive === true
        ? activities.duration(data => {
            return data.type === type;
          })
        : db.filter(data => {
            return data.type === type;
          });
    setTypeResults(results);
    setTypeFilterActive(true);
    setActivities(results);

    console.log('durRes', durationFilterActive);
  }

  function filterTypeReset() {
    setActivities(db);
    setTypeFilterActive(false);
  }

  return (
    <Appcontainer>
      <DurationFilter
        activities={activities}
        onFilterDuration={filterDurationEX}
        onFilterDurationReset={filterDurationReset}
      />
      <TypeFilter activities={activities} onFilterType={filtertypeEX} onFilterTypeReset={filterTypeReset} />
      <ActivityCards activities={activities} />
    </Appcontainer>
  );
}
const Appcontainer = styled.div`
  display: grid;
  height: 100vh;
`;
