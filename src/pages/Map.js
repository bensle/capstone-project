import {MapContainer, TileLayer, Marker, Popup} from 'react-leaflet';
import styled from 'styled-components';

import db from '../services/activityDB';

export default function Map({activities}) {
  return (
    <MapContainer center={[50.937531, 6.960279]} zoom={9} scrollWheelZoom={true}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[51.505, -0.09]}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>

      {db.map(({id, name, infos, location, longitude, latitude}) => (
        <Marker key={id} position={[latitude, longitude]}>
          <Popup>
            <Popupspan>{name}</Popupspan>
            <br />
            {location}
            <br />
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}

const Popupspan = styled.span`
  font-weight: bold;
`;
