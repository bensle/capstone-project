import {useEffect, useState} from 'react';

import Favorite from '../components/Favorite/Favorite';

export default function FavoritesPage({activities, favorite, onSetIsHidden, onRemoveFromFavorites}) {
  //----- Find favorites for Mapping -----
  // const showFavorite = activities.filter(activity => favorite.includes(activity.id));

  const [savedFavorites, setSavedFavorites] = useState([]);

  useEffect(
    () => setSavedFavorites(() => activities.filter(activity => favorite.includes(activity.id))),
    [activities, favorite]
  );
  console.log('FavoritesPage-click', savedFavorites);
  return (
    <div>
      <h2>Favorites</h2>
      <button onClick={onSetIsHidden}>go back</button>
      {savedFavorites.map(({id, name, location, duration, type, infos}) => (
        <Favorite
          id={id}
          key={id}
          name={name}
          location={location}
          duration={duration}
          type={type}
          infos={infos}
          onRemoveFromFavorites={onRemoveFromFavorites}
        />
      ))}
    </div>
  );
}
