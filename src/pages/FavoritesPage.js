import Favorite from '../components/Favorite/Favorite';

export default function FavoritesPage({activities, favorite, onSetIsHidden, onRemoveFromFavorites, savedFavorites}) {
  //----- Find favorites for Mapping -----
  // const showFavorite = activities.filter(activity => favorite.includes(activity.id));
  const savedFavorite = activities.filter(activity => activity.isFavorite);

  return (
    <div>
      <h2>Favorites</h2>
      <button onClick={onSetIsHidden}>go back</button>
      {savedFavorite.map(({id, name, location, duration, type, infos}) => (
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
