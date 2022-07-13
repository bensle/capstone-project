import {MapContainer, TileLayer, Marker, Popup} from 'react-leaflet';
import styled from 'styled-components';

import db from '../services/activityDB';

export default function Map() {
  return (
    <MapContainer center={[50.937531, 6.960279]} zoom={9} scrollWheelZoom={true}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {db.map(({id, name, infos, location, longitude, latitude}) => (
        <Marker key={id} position={[latitude, longitude]}>
          <Popup className="custom-popup">
            <PopupContentDiv>
              <Popupspan>{name}</Popupspan>
              {location}
              <a href={infos}>Find out more</a>
            </PopupContentDiv>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}

const Popupspan = styled.span`
  font-weight: bold;
`;

const PopupContentDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;
