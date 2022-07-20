import {FaDumbbell} from 'react-icons/fa'; //sport
import {FaRegThumbsUp} from 'react-icons/fa';
import {GiMountainClimbing} from 'react-icons/gi'; //challenge
import {ImLeaf} from 'react-icons/im'; //nature
import {TbBuildingMonument} from 'react-icons/tb'; //culture
import {TbBeach} from 'react-icons/tb'; //recovery

import * as Style from './TypeFilterStyle';

export default function TypeFilter({onFilterTypeReset, onFilterTypeValue}) {
  return (
    <Style.TypeSection>
      <Style.FilterHeading id="radioTypeHeading">I&apos;m interested in:</Style.FilterHeading>
      <Style.RadioTypeForm aria-labelledby="radioTypeHeading">
        <input
          type="radio"
          id="radioTypeAll"
          name="radioType"
          value="all"
          defaultChecked
          onClick={() => onFilterTypeReset()}
        ></input>
        <label htmlFor="radioTypeAll">
          <Style.TypeSpan>
            <FaRegThumbsUp />
          </Style.TypeSpan>
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
          <Style.TypeSpan>
            <TbBuildingMonument />
          </Style.TypeSpan>
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
          <Style.TypeSpan>
            <ImLeaf />
          </Style.TypeSpan>
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
          <Style.TypeSpan>
            <FaDumbbell />
          </Style.TypeSpan>
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
          <Style.TypeSpan>
            <TbBeach />
          </Style.TypeSpan>
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
          <Style.TypeSpan>
            <GiMountainClimbing />
          </Style.TypeSpan>
          Challenge
        </label>
      </Style.RadioTypeForm>
    </Style.TypeSection>
  );
}
