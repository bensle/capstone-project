import {MdOutlineBookmarkAdd} from 'react-icons/md';
import styled from 'styled-components';

import Section from './ActivityCardStyle';

export default function ActivityCard(props) {
  return (
    <Section>
      <FavDiv>
        <FavButton>
          <MdOutlineBookmarkAdd />
        </FavButton>
      </FavDiv>
      <h2>{props.name}</h2>
      <h3>{props.location}</h3>
      {/* eslint-disable-next-line */}
      <ul role="list">
        {props.duration === 'short' ? (
          <li>Day trip</li>
        ) : props.duration === 'weekend' ? (
          <li>Weekend Trip</li>
        ) : (
          <li>3 Days +</li>
        )}
        <li>{props.type}</li>
      </ul>
      <a href={props.infos}>Find out more</a>
    </Section>
  );
}

const FavDiv = styled.div`
  position: relative;
`;
const FavButton = styled.button`
  background: none;
  border: none;
  position: absolute;
  top: 0;
  right: 0;
  font-size: 28px;
  color: white;
`;
