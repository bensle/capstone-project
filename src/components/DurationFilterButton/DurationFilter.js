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

  return (
    <>
      <FilterHeading>I&apos;m looking for:</FilterHeading>
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
    </>
  );
}

const FilterHeading = styled.h2`
  margin: 10px 0 0 0;
  text-align: left;
  font-size: 1rem;
`;
const RadioToolbar = styled.form`
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
  margin: 0 0 10px 0;

  input[type='radio'] {
    opacity: 0;
    position: fixed;
    width: 0;
  }
  label {
    padding: 5px 5px;
    border: 1px solid;
    border-radius: 5px;
    flex-grow: 1;
  }
  input[type='radio']:checked + label {
    background-color: var(--greenish);
  }
`;
