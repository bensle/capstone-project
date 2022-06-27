import styled from 'styled-components';
export default function DurationFilter() {
  return (
    <RadioToolbar>
      <input type="radio" id="radioDayTrip" name="radioDuration" value="DayTrip"></input>
      <label htmlFor="radioDayTrip">Day Trip</label>

      <input type="radio" id="radioWeekend" name="radioDuration" value="Weekend"></input>
      <label htmlFor="radioWeekend">Weekend</label>

      <input type="radio" id="radioVacation" name="radioDuration" value="Vacation"></input>
      <label htmlFor="radioVacation">3 Days +</label>
    </RadioToolbar>
  );
}

const RadioToolbar = styled.form`
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
  justify-content: center;

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
    border-radius: 10px;
  }
`;
