import {MdWbSunny} from 'react-icons/md';
import {MdDeleteForever} from 'react-icons/md';
import styled from 'styled-components';

import Favorite from '../components/Favorite/Favorite';

export default function FavoritesPage({
  activities,
  onSetIsHidden,
  onToggleFavorites,
  onCloseConfirmationModal,
  onShowConfirmationHandler,
  onDeleteActivity,
  showModalConfirmation,
}) {
  //----- Find favorites for Mapping -----
  const savedFavorite = activities.filter(activity => activity.isFavorite);
  console.log(savedFavorite);

  return (
    <div>
      <h2>Favorites</h2>
      <button onClick={onSetIsHidden}>go back</button>
      <StyledP>
        See your favorite Activities here. To delete them directly click on the{' '}
        <DelSpan>
          <MdDeleteForever />
        </DelSpan>
        . <br />
        To remove an activity from your favorites click{' '}
        <FavSpan>
          <MdWbSunny />
        </FavSpan>
      </StyledP>
      {savedFavorite.map(({id, name, location, duration, type, infos}) => (
        <Favorite
          id={id}
          key={id}
          name={name}
          location={location}
          duration={duration}
          type={type}
          infos={infos}
          onToggleFavorites={onToggleFavorites}
          onDelete={() => onDeleteActivity(id)}
          onShowConfirmationModal={() => onShowConfirmationHandler(id)}
          onCloseConfirmationModal={onCloseConfirmationModal}
          showModalConfirmation={showModalConfirmation}
        />
      ))}
    </div>
  );
}

const StyledP = styled.p`
  border: 2px solid white;
  border-radius: 6px;
  background-color: var(--modalbg);
  padding: 0.2rem;
  text-align: center;
  font-size: 0.7rem;
  margin: 0.5rem 0;
`;
const FavSpan = styled.span`
  color: yellow;
`;
const DelSpan = styled.span`
  color: red;
`;
