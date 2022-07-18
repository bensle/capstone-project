import {FaRegThumbsUp} from 'react-icons/fa';
import {MdOutlineAccessTimeFilled} from 'react-icons/md'; //time
import styled from 'styled-components';

export default function DurationFilter({onFilterDurationReset, onFilterDurationValue}) {
  return (
    <DurationSection>
      <FilterHeading id="radioDurationHeading">I&apos;m looking for:</FilterHeading>
      <RadioDurationForm aria-labelledby="radioDurationHeading">
        <AllInput
          type="radio"
          id="radioAll"
          name="radioDuration"
          value="all"
          defaultChecked
          onChange={event => onFilterDurationValue(event.target.value)}
          onClick={() => onFilterDurationReset()}
        ></AllInput>
        <AllLabel htmlFor="radioAll">
          <DurationSpan>
            <FaRegThumbsUp />
          </DurationSpan>
          <span>All</span>
        </AllLabel>

        <ShortInput
          type="radio"
          id="radioDayTrip"
          name="radioDuration"
          value="short"
          onChange={event => onFilterDurationValue(event.target.value)}
        ></ShortInput>
        <ShortLabel htmlFor="radioDayTrip">
          <DurationSpan>
            <MdOutlineAccessTimeFilled />
          </DurationSpan>
          Day Trip
        </ShortLabel>

        <MiddleInput
          type="radio"
          id="radioWeekend"
          name="radioDuration"
          value="weekend"
          onChange={event => onFilterDurationValue(event.target.value)}
        ></MiddleInput>
        <MiddleLabel htmlFor="radioWeekend">
          <DurationSpan>
            <MdOutlineAccessTimeFilled />
          </DurationSpan>
          Weekend
        </MiddleLabel>

        <LongInput
          type="radio"
          id="radioVacation"
          name="radioDuration"
          value="vacation"
          onChange={event => onFilterDurationValue(event.target.value)}
        ></LongInput>
        <LongLabel htmlFor="radioVacation">
          <DurationSpan>
            <MdOutlineAccessTimeFilled />
          </DurationSpan>
          3 Days +
        </LongLabel>
      </RadioDurationForm>
    </DurationSection>
  );
}

const DurationSection = styled.section`
  padding: 0 10px;
`;
const DurationSpan = styled.span`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const FilterHeading = styled.h2`
  /* margin: 10px 0px 0 0; */
  text-align: left;
  font-size: 0.925rem;
  font-weight: 500;
`;
const RadioDurationForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;

  input[type='radio'] {
    opacity: 0;
    position: fixed;
    width: 0;
  }
`;

const AllLabel = styled.label`
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
`;
const AllInput = styled.input`
  &:checked + label {
    background-color: var(--colorAll);
  }
`;
const ShortLabel = styled.label`
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
`;

const ShortInput = styled.input`
  &:checked + label {
    background-color: var(--colorShort);
  }
`;
const MiddleLabel = styled.label`
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
`;

const MiddleInput = styled.input`
  &:checked + label {
    background-color: var(--colorMiddle);
  }
`;
const LongLabel = styled.label`
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
`;

const LongInput = styled.input`
  &:checked + label {
    background-color: var(--colorLong);
  }
`;
