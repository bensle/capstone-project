import {Player} from '@lottiefiles/react-lottie-player';
import {IoMdHeart} from 'react-icons/io';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

import Favorite from '../components/Favorite/Favorite';
import Header from '../components/Header/Header';

export default function FavoritesPage({
  activities,
  onToggleFavorites,
  onCloseConfirmationModal,
  onShowConfirmationModal,
  onDeleteActivity,
  showModalConfirmation,
}) {
  //----- Find favorites for Mapping -----
  const savedFavorite = activities.filter(activity => activity.isFavorite);

  return (
    <Main>
      <Header />
      <WrapperDiv>
        {savedFavorite.length === 0 ? (
          <NoFavoritesDiv>
            <h3>
              There are currently no saved Favorites{' '}
              <FavSpan>
                <IoMdHeart />
              </FavSpan>
            </h3>
            <PlayerDiv>
              <Player
                src="https://assets4.lottiefiles.com/packages/lf20_dczrdclv.json"
                loop
                autoplay
                style={{height: '50px', width: '50px'}}
              />
            </PlayerDiv>
            <h3>
              Head back to <StyledLink to="/">Activities</StyledLink> and explore something New!
            </h3>
          </NoFavoritesDiv>
        ) : (
          ''
        )}
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
            onShowConfirmationModal={() => onShowConfirmationModal(id)}
            onCloseConfirmationModal={onCloseConfirmationModal}
            showModalConfirmation={showModalConfirmation}
          />
        ))}
      </WrapperDiv>
    </Main>
  );
}

const Main = styled.main`
  display: grid;
  height: 100vh;
  align-content: start;
`;
const NoFavoritesDiv = styled.div`
  background: var(--bgcolorlight);
  padding: 20px;
  margin: 10px 20px;
  border-radius: 10px;

  @media (min-width: 600px) {
    position: absolute;
    top: 10%;
    left: 30%;
    right: 30%;
  }
  @media (min-width: 900px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (min-width: 1200px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;
const PlayerDiv = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 1.5rem;
`;
const FavSpan = styled.span`
  color: var(--isFavorite);
`;
export const WrapperDiv = styled.div`
  display: grid;
  gap: 10px;
  background: var(--bgcolor);
  overflow-y: auto;
  padding: 10px 20px 10px 20px;
  border-radius: 10px;

  @media (min-width: 600px) {
    grid-template-columns: 1fr 1fr;
    padding-bottom: 20px;
  }
  @media (min-width: 900px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
  @media (min-width: 1200px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
`;

const StyledLink = styled(Link)`
  color: var(--linkcolor);
  border-radius: 5px;
  &:active {
    color: var(--linkcoloractive);
  }
  &:visited {
    color: var(--colorAll);
  }
  &:hover {
    color: var(--textcolor);
  }
`;
