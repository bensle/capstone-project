import {MdWbSunny} from 'react-icons/md';
import {MdOutlineWbSunny} from 'react-icons/md';
import {MdDeleteForever} from 'react-icons/md';

import Backdrop from '../ComfirmationModal/Backdrop';
import ConfirmationModal from '../ComfirmationModal/ConfirmationModal';

import {Section, FavDiv, FavButton, FavButtonDelete, SpanAdd, SpanAdded} from './ActivityCardStyle';

export default function ActivityCard({
  id,
  name,
  location,
  duration,
  type,
  infos,
  onToggleFavorites,
  isFavorite,
  onDelete,
  onShowConfirmationModal,
  onCloseConfirmationModal,
  showModalConfirmation,
}) {
  return (
    <Section>
      {isFavorite ? (
        <FavDiv>
          <FavButton aria-label="Added to Favorites" onClick={() => onToggleFavorites(id)}>
            <SpanAdded>
              <MdWbSunny />
            </SpanAdded>
          </FavButton>
          <FavButtonDelete aria-label="Delete Activity" onClick={() => onShowConfirmationModal(id)}>
            <SpanAdd>
              <MdDeleteForever />
            </SpanAdd>
          </FavButtonDelete>
        </FavDiv>
      ) : (
        <FavDiv>
          <FavButton aria-label="Add to Favorites" onClick={() => onToggleFavorites(id)}>
            <SpanAdd>
              <MdOutlineWbSunny />
            </SpanAdd>
          </FavButton>
          <FavButtonDelete aria-label="Delete Activity" onClick={() => onShowConfirmationModal(id)}>
            <SpanAdd>
              <MdDeleteForever />
            </SpanAdd>
          </FavButtonDelete>
        </FavDiv>
      )}

      <h2>{name}</h2>
      <h3>{location}</h3>
      {/* eslint-disable-next-line */}
      <ul role="list">
        {duration === 'short' ? <li>Day trip</li> : duration === 'weekend' ? <li>Weekend Trip</li> : <li>3 Days +</li>}
        <li>{type}</li>
      </ul>
      <a href={infos}>Find out more</a>
      {showModalConfirmation.show && <Backdrop onClick={onCloseConfirmationModal} />}
      {showModalConfirmation.show && <ConfirmationModal onClose={onCloseConfirmationModal} onDelete={onDelete} />}
    </Section>
  );
}
