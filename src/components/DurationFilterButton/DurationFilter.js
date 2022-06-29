import {useState} from 'react';
import styled from 'styled-components';

export default function DurationFilter({onFilterDuration, onFilterReset}) {
  return (
    <>
      <FilterHeading>I&apos;m looking for:</FilterHeading>
      <RadioToolbar>
        <input
          type="radio"
          id="radioDayTrip"
          name="radioDuration"
          value="DayTrip"
          onClick={() => onFilterDuration('short')}
        ></input>
        <label htmlFor="radioDayTrip">Day Trip</label>

        <input
          type="radio"
          id="radioWeekend"
          name="radioDuration"
          value="Weekend"
          onClick={() => onFilterDuration('weekend')}
        ></input>
        <label htmlFor="radioWeekend">Weekend</label>

        <input
          type="radio"
          id="radioVacation"
          name="radioDuration"
          value="Vacation"
          onClick={() => onFilterDuration('vacation')}
        ></input>
        <label htmlFor="radioVacation">3 Days +</label>
        <input type="radio" id="radioAll" name="radioDuration" value="All" onClick={() => onFilterReset()}></input>
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
