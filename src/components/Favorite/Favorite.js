import {MdWbSunny} from 'react-icons/md';

import {FavDiv, FavButton, Section} from './FavoriteStyle';

export default function Favorite({name, location, duration, type, infos, id, onRemoveFromFavorites}) {
  return (
    <Section>
      <FavDiv>
        <FavButton onClick={() => onRemoveFromFavorites(id)}>
          <MdWbSunny />
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
