import {FaDumbbell} from 'react-icons/fa'; //sport
import {FiExternalLink} from 'react-icons/fi';
import {GiMountainClimbing} from 'react-icons/gi'; //challenge
import {ImLeaf} from 'react-icons/im'; //nature
import {IoMdHeart} from 'react-icons/io';
import {MdOutlineAccessTimeFilled} from 'react-icons/md'; //time
import {MdOutlineLocationOn} from 'react-icons/md'; //location
import {TbBuildingMonument} from 'react-icons/tb'; //culture
import {TbBeach} from 'react-icons/tb'; //recovery
import {TiDeleteOutline} from 'react-icons/ti';

import Backdrop from '../ComfirmationModal/Backdrop';
import ConfirmationModal from '../ComfirmationModal/ConfirmationModal';

import * as Style from './FavoriteStyle';

export default function Favorite({
  name,
  location,
  duration,
  type,
  infos,
  id,
  onToggleFavorites,
  onDelete,
  onShowConfirmationModal,
  onCloseConfirmationModal,
  showModalConfirmation,
}) {
  return (
    <Style.Section>
      <Style.DescriptionDiv>
        <h2>{name}</h2>
        <h2>
          <MdOutlineLocationOn /> <Style.LocationSpan>{location}</Style.LocationSpan>
        </h2>
      </Style.DescriptionDiv>
      <div>
        {/* eslint-disable-next-line */}
        <ul role="list">
          {duration === 'short' && (
            <Style.ShortLi>
              <MdOutlineAccessTimeFilled />
              {type === 'culture' && (
                <Style.TypeSpan>
                  <TbBuildingMonument />
                </Style.TypeSpan>
              )}
              {type === 'sport' && (
                <Style.TypeSpan>
                  <FaDumbbell />
                </Style.TypeSpan>
              )}
              {type === 'recovery' && (
                <Style.TypeSpan>
                  <TbBeach />
                </Style.TypeSpan>
              )}
              {type === 'challenge' && (
                <Style.TypeSpan>
                  <GiMountainClimbing />
                </Style.TypeSpan>
              )}
              {type === 'nature' && (
                <Style.TypeSpan>
                  <ImLeaf />
                </Style.TypeSpan>
              )}
            </Style.ShortLi>
          )}
          {duration === 'weekend' && (
            <Style.MiddleLi>
              <MdOutlineAccessTimeFilled />
              {type === 'culture' && (
                <Style.TypeSpan>
                  <TbBuildingMonument />
                </Style.TypeSpan>
              )}
              {type === 'sport' && (
                <Style.TypeSpan>
                  <FaDumbbell />
                </Style.TypeSpan>
              )}
              {type === 'recovery' && (
                <Style.TypeSpan>
                  <TbBeach />
                </Style.TypeSpan>
              )}
              {type === 'challenge' && (
                <Style.TypeSpan>
                  <GiMountainClimbing />
                </Style.TypeSpan>
              )}
              {type === 'nature' && (
                <Style.TypeSpan>
                  <ImLeaf />
                </Style.TypeSpan>
              )}
            </Style.MiddleLi>
          )}
          {duration === 'vacation' && (
            <Style.LongLi>
              <MdOutlineAccessTimeFilled />
              {type === 'culture' && (
                <Style.TypeSpan>
                  <TbBuildingMonument />
                </Style.TypeSpan>
              )}
              {type === 'sport' && (
                <Style.TypeSpan>
                  <FaDumbbell />
                </Style.TypeSpan>
              )}
              {type === 'recovery' && (
                <Style.TypeSpan>
                  <TbBeach />
                </Style.TypeSpan>
              )}
              {type === 'challenge' && (
                <Style.TypeSpan>
                  <GiMountainClimbing />
                </Style.TypeSpan>
              )}
              {type === 'nature' && (
                <Style.TypeSpan>
                  <ImLeaf />
                </Style.TypeSpan>
              )}
            </Style.LongLi>
          )}
          <Style.InfoLi>
            <a href={infos}>More Infos</a>
            <Style.Linkspan>
              <FiExternalLink />
            </Style.Linkspan>
          </Style.InfoLi>
        </ul>
      </div>

      <Style.ActionsDiv>
        <Style.FavButton aria-label="Added to Favorites" onClick={() => onToggleFavorites(id)}>
          <Style.SpanAdded>
            <IoMdHeart />
          </Style.SpanAdded>
        </Style.FavButton>

        <Style.FavButtonDelete aria-label="Delete Activity" onClick={() => onShowConfirmationModal(id)}>
          <Style.SpanAdd>
            <TiDeleteOutline />
          </Style.SpanAdd>
        </Style.FavButtonDelete>
      </Style.ActionsDiv>

      {showModalConfirmation.show && <Backdrop onClick={onCloseConfirmationModal} />}
      {showModalConfirmation.show && (
        <ConfirmationModal
          onClose={onCloseConfirmationModal}
          onDelete={onDelete}
          showModalConfirmation={showModalConfirmation}
        />
      )}
    </Style.Section>
  );
}
