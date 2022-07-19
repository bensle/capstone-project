import L from 'leaflet';
import {MapContainer, TileLayer, Marker, Popup, ZoomControl} from 'react-leaflet';
import styled from 'styled-components';

import Header from '../components/Header/Header';

export default function Map({activities}) {
  var customMarker = new L.icon({
    iconUrl: require('../services/location.png'),
    iconRetinaUrl: require('../services/location.png'),
    iconSize: [35, 35],
    popupAnchor: [-2, -2],
  });

  return (
    <>
      <MapContainer center={[51.724938, 10.6948924]} zoom={6} scrollWheelZoom={true} zoomControl={false}>
        <Header />
        <TileLayer
          attribution='&copy; <a href=\"https://www.jawg.io\" target=\"_blank\">&copy; Jawg</a> - <a href=\"https://www.openstreetmap.org\" target=\"_blank\">&copy; OpenStreetMap</a>&nbsp;contributors"'
          url="https://tile.jawg.io/4b06b447-06d3-4895-97e3-d7644df0d7b4/{z}/{x}/{y}{r}.png?access-token=7kjwtRh2erXaMRlOuMXdI3pfL6c1A974MVGbFqpiwByOcvV8JiqUzinEyhYKMR36"
        />
        <ZoomControl position="bottomright" />
        {activities.map(({id, name, infos, location, longitude, latitude}) => (
          <Marker key={id} icon={customMarker} position={[latitude, longitude]}>
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
    </>
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
