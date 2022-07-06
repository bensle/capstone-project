import {MdOutlineBookmarkAdd} from 'react-icons/md';

import {FavDiv, FavButton, Section} from './FavoriteStyle';

export default function Favorite(props) {
  return (
    <Section>
      <FavDiv>
        <FavButton onClick={() => props.onAddFavorite(props.id)}>
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
