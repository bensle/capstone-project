import {MdWbSunny} from 'react-icons/md';
import {MdOutlineWbSunny} from 'react-icons/md';
import styled from 'styled-components';

import Section from './ActivityCardStyle';

export default function ActivityCard({id, name, location, duration, type, infos, onToggleFavorites, isFavorite}) {
  return (
    <Section>
      <FavDiv>
        <FavButton onClick={() => onToggleFavorites(id)}>
          {isFavorite ? (
            <SpanAdded>
              <MdWbSunny />
            </SpanAdded>
          ) : (
            <SpanAdd>
              <MdOutlineWbSunny />
            </SpanAdd>
          )}
        </FavButton>
      </FavDiv>
      <h2>{name}</h2>
      <h3>{location}</h3>
      {/* eslint-disable-next-line */}
      <ul role="list">
        {duration === 'short' ? <li>Day trip</li> : duration === 'weekend' ? <li>Weekend Trip</li> : <li>3 Days +</li>}
        <li>{type}</li>
      </ul>
      <a href={infos}>Find out more</a>
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
  right: 0;
  font-size: 28px;
  color: white;
`;

const SpanAdd = styled.span``;
const SpanAdded = styled.span`
  color: yellow;
`;
