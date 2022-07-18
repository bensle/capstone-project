import {FaDumbbell} from 'react-icons/fa'; //sport
import {FaRegThumbsUp} from 'react-icons/fa';
import {GiMountainClimbing} from 'react-icons/gi'; //challenge
import {ImLeaf} from 'react-icons/im'; //nature
import {TbBuildingMonument} from 'react-icons/tb'; //culture
import {TbBeach} from 'react-icons/tb'; //recovery
import styled from 'styled-components';

export default function TypeFilter({onFilterTypeReset, onFilterTypeValue}) {
  return (
    <TypeSection>
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
        <label htmlFor="radioTypeAll">
          <TypeSpan>
            <FaRegThumbsUp />
          </TypeSpan>
          All
        </label>

        <input
          type="radio"
          id="radioCulture"
          name="radioType"
          value="culture"
          onChange={event => onFilterTypeValue(event.target.value)}
        ></input>
        <label htmlFor="radioCulture">
          <TypeSpan>
            <TbBuildingMonument />
          </TypeSpan>
          Culture
        </label>

        <input
          type="radio"
          id="radioNature"
          name="radioType"
          value="nature"
          onChange={event => onFilterTypeValue(event.target.value)}
        ></input>
        <label htmlFor="radioNature">
          <TypeSpan>
            <ImLeaf />
          </TypeSpan>
          Nature
        </label>

        <input
          type="radio"
          id="radioSport"
          name="radioType"
          value="sport"
          onChange={event => onFilterTypeValue(event.target.value)}
        ></input>
        <label htmlFor="radioSport">
          <TypeSpan>
            <FaDumbbell />
          </TypeSpan>
          Sport
        </label>

        <input
          type="radio"
          id="radioRecovery"
          name="radioType"
          value="recovery"
          onChange={event => onFilterTypeValue(event.target.value)}
        ></input>
        <label htmlFor="radioRecovery">
          <TypeSpan>
            <TbBeach />
          </TypeSpan>
          Recovery
        </label>

        <input
          type="radio"
          id="radioChallenge"
          name="radioType"
          value="challenge"
          onChange={event => onFilterTypeValue(event.target.value)}
        ></input>
        <label htmlFor="radioChallenge">
          <TypeSpan>
            <GiMountainClimbing />
          </TypeSpan>
          Challenge
        </label>
      </RadioTypeForm>
    </TypeSection>
  );
}

const TypeSection = styled.section`
  padding: 0 10px;
`;
const TypeSpan = styled.span`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FilterHeading = styled.h2`
  text-align: left;
  font-size: 0.925rem;
  font-weight: 500;
  @media (min-width: 600px) {
    margin-top: 10px;
  }
`;
const RadioTypeForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;

  input[type='radio'] {
    opacity: 0;
    position: fixed;
    width: 0;
  }
  label {
    display: flex;
    align-items: center;
    font-size: 0.925rem;
    gap: 1.25rem;
    padding: 5px 5px;
    background: var(--bgcolorcard);
    border-radius: 10px;
    cursor: pointer;
    &:hover {
      transform: translateX(-7px);
    }
  }
  input[type='radio']:checked + label {
    background-color: var(--colorAll);
  }
`;
