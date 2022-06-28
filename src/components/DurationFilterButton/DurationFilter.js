import {useState} from 'react';
import styled from 'styled-components';

import db from '../../lib/activityDB';

export default function DurationFilter({setActivities}) {
  const [selectedRadioButton, setSelectedRadioButton] = useState();

  function filterDuration(duration) {
    const results = db.filter(currentData => {
      return currentData.duration === duration;
    });
    setActivities(results);
    // console.log(results);
  }

  // const filterResult = activityDuration => {
  //   const result = activities.filter(curData => {
  //     return curData.duration === activityDuration;
  //   });
  //   console.log(result);
  // };
  return (
    <RadioToolbar>
      <input
        type="radio"
        id="radioDayTrip"
        name="radioDuration"
        value="DayTrip"
        onChange={event => setSelectedRadioButton(event.target.value)}
        onClick={() => filterDuration('short')}
      ></input>
      <label htmlFor="radioDayTrip">Day Trip</label>

      <input
        type="radio"
        id="radioWeekend"
        name="radioDuration"
        value="Weekend"
        onChange={event => setSelectedRadioButton(event.target.value)}
        onClick={() => filterDuration('weekend')}
      ></input>
      <label htmlFor="radioWeekend">Weekend</label>

      <input
        type="radio"
        id="radioVacation"
        name="radioDuration"
        value="Vacation"
        onChange={event => setSelectedRadioButton(event.target.value)}
        onClick={() => filterDuration('vacation')}
      ></input>
      <label htmlFor="radioVacation">3 Days +</label>
      <input
        type="radio"
        id="radioAll"
        name="radioDuration"
        value="All"
        onChange={event => setSelectedRadioButton(event.target.value)}
        onClick={() => setActivities(db)}
      ></input>
      <label htmlFor="radioAll">All</label>
    </RadioToolbar>
  );
}

const RadioToolbar = styled.form`
  display: flex;
  flex-wrap: wrap;
  /* justify-content: space-around; */
  gap: 5px;
  margin: 20px 0;

  input[type='radio'] {
    opacity: 0;
    position: fixed;
    width: 0;
  }
  input[type='radio']:checked + label {
    background-color: var(--greenish);
  }
  label {
    padding: 5px 5px;
    border: 1px solid;
    border-radius: 5px;
    flex-grow: 1;
  }
`;
