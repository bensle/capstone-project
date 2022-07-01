import styled from 'styled-components';

export default function TypeFilter({onFilterType, onFilterTypeReset, onFilterTypeValue}) {
  return (
    <div>
      <FilterHeading id="radioTypeHeading">I&apos;m interested in:</FilterHeading>
      <RadioTypeForm aria-labelledby="radioTypeHeading">
        <input
          type="radio"
          id="radioTypeAll"
          name="radioType"
          value="all"
          defaultChecked
          onClick={() => onFilterTypeReset()}
        ></input>
        <label htmlFor="radioTypeAll">All</label>

        <input
          type="radio"
          id="radioCulture"
          name="radioType"
          value="culture"
          onChange={event => onFilterTypeValue(event.target.value)}
          onClick={() => onFilterType('culture')}
        ></input>
        <label htmlFor="radioCulture">culture</label>

        <input
          type="radio"
          id="radioNature"
          name="radioType"
          value="nature"
          onChange={event => onFilterTypeValue(event.target.value)}
          onClick={() => onFilterType('nature')}
        ></input>
        <label htmlFor="radioNature">nature</label>

        <input
          type="radio"
          id="radioSport"
          name="radioType"
          value="sport"
          onChange={event => onFilterTypeValue(event.target.value)}
          onClick={() => onFilterType('sport')}
        ></input>
        <label htmlFor="radioSport">sport</label>

        <input
          type="radio"
          id="radioRecovery"
          name="radioType"
          value="recovery"
          onChange={event => onFilterTypeValue(event.target.value)}
          onClick={() => onFilterType('recovery')}
        ></input>
        <label htmlFor="radioRecovery">recovery</label>

        <input
          type="radio"
          id="radioChallenge"
          name="radioType"
          value="challenge"
          onChange={event => onFilterTypeValue(event.target.value)}
          onClick={() => onFilterType('challenge')}
        ></input>
        <label htmlFor="radioChallenge">challenge</label>
      </RadioTypeForm>
    </div>
  );
}

const FilterHeading = styled.h2`
  margin: 10px 0 0 0;
  text-align: center;
  font-size: 1rem;
`;
const RadioTypeForm = styled.form`
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
    background-color: var(--orange);
  }
`;
