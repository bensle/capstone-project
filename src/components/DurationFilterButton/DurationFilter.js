import {FaRegThumbsUp} from 'react-icons/fa';
import {MdOutlineAccessTimeFilled} from 'react-icons/md'; //time

import * as Style from './DurationFilterStyle';

export default function DurationFilter({onFilterDurationReset, onFilterDurationValue}) {
  return (
    <Style.DurationSection>
      <Style.FilterHeading id="radioDurationHeading">I&apos;m looking for:</Style.FilterHeading>
      <Style.RadioDurationForm aria-labelledby="radioDurationHeading">
        <Style.AllInput
          type="radio"
          id="radioAll"
          name="radioDuration"
          value="all"
          defaultChecked
          onChange={event => onFilterDurationValue(event.target.value)}
          onClick={() => onFilterDurationReset()}
        ></Style.AllInput>
        <Style.AllLabel htmlFor="radioAll">
          <Style.DurationSpan>
            <FaRegThumbsUp />
          </Style.DurationSpan>
          <span>All</span>
        </Style.AllLabel>

        <Style.ShortInput
          type="radio"
          id="radioDayTrip"
          name="radioDuration"
          value="short"
          onChange={event => onFilterDurationValue(event.target.value)}
        ></Style.ShortInput>
        <Style.ShortLabel htmlFor="radioDayTrip">
          <Style.DurationSpanShort>
            <MdOutlineAccessTimeFilled />
          </Style.DurationSpanShort>
          Day Trip
        </Style.ShortLabel>

        <Style.MiddleInput
          type="radio"
          id="radioWeekend"
          name="radioDuration"
          value="weekend"
          onChange={event => onFilterDurationValue(event.target.value)}
        ></Style.MiddleInput>
        <Style.MiddleLabel htmlFor="radioWeekend">
          <Style.DurationSpanMiddle>
            <MdOutlineAccessTimeFilled />
          </Style.DurationSpanMiddle>
          Weekend
        </Style.MiddleLabel>

        <Style.LongInput
          type="radio"
          id="radioVacation"
          name="radioDuration"
          value="vacation"
          onChange={event => onFilterDurationValue(event.target.value)}
        ></Style.LongInput>
        <Style.LongLabel htmlFor="radioVacation">
          <Style.DurationSpanLong>
            <MdOutlineAccessTimeFilled />
          </Style.DurationSpanLong>
          3 Days +
        </Style.LongLabel>
      </Style.RadioDurationForm>
    </Style.DurationSection>
  );
}
