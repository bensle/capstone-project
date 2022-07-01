import styled from 'styled-components';

export default function DurationFilter({onFilterDurationReset, onFilterDurationValue}) {
  return (
    <div>
      <FilterHeading id="radioDurationHeading">I&apos;m looking for:</FilterHeading>
      <RadioDurationForm aria-labelledby="radioDurationHeading">
        <input
          type="radio"
          id="radioAll"
          name="radioDuration"
          value="all"
          defaultChecked
          onChange={event => onFilterDurationValue(event.target.value)}
          onClick={() => onFilterDurationReset()}
        ></input>
        <label htmlFor="radioAll">All</label>
        <input
          type="radio"
          id="radioDayTrip"
          name="radioDuration"
          value="short"
          onChange={event => onFilterDurationValue(event.target.value)}
        ></input>
        <label htmlFor="radioDayTrip">Day Trip</label>

        <input
          type="radio"
          id="radioWeekend"
          name="radioDuration"
          value="weekend"
          onChange={event => onFilterDurationValue(event.target.value)}
        ></input>
        <label htmlFor="radioWeekend">Weekend</label>

        <input
          type="radio"
          id="radioVacation"
          name="radioDuration"
          value="vacation"
          onChange={event => onFilterDurationValue(event.target.value)}
        ></input>
        <label htmlFor="radioVacation">3 Days +</label>
      </RadioDurationForm>
    </div>
  );
}

const FilterHeading = styled.h2`
  margin: 10px 0 0 0;
  text-align: center;
  font-size: 1rem;
`;
const RadioDurationForm = styled.form`
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
  margin: 0 0 10px 0;
  justify-content: center;

  input[type='radio'] {
    opacity: 0;
    position: fixed;
    width: 0;
  }
  label {
    padding: 5px 5px;
    border: 1px solid;
    border-radius: 5px;
    flex-basis: 80px;
  }
  input[type='radio']:checked + label {
    background-color: var(--greenish);
  }
`;
