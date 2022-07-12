import {nanoid} from 'nanoid';
const db = [
  {
    id: nanoid(),
    isFavorite: false,
    name: 'Freudenberg',
    location: 'Siegerland',
    duration: 'short',
    type: 'culture',
    latitude: 50.89735,
    longitude: 7.87637,
    infos: 'https://www.freudenberg-wirkt.de/',
  },
  {
    id: nanoid(),
    isFavorite: false,
    name: 'Kreidedampfbad',
    location: 'Binz',
    duration: 'vacation',
    type: 'recovery',
    latitude: 54.399841,
    longitude: 13.60998,
    infos: 'https://www.ruegen.de',
  },
  {
    id: nanoid(),
    isFavorite: false,
    name: 'Luftkurort',
    location: 'Mittenwald',
    duration: 'weekend',
    type: 'recovery',
    latitude: 47.4429543,
    longitude: 11.2655684,
    infos: 'https://alpenwelt-karwendel.de',
  },
  {
    id: nanoid(),
    isFavorite: false,
    name: 'Drei Kilometer Spass',
    location: 'Bremen',
    duration: 'short',
    type: 'nature',
    latitude: 53.0758196,
    longitude: 8.8071646,
    infos: 'https://bremer-eisverein.de',
  },
  {
    id: nanoid(),
    name: 'Fatbike',
    isFavorite: false,
    location: 'Vogelsberg',
    duration: 'short',
    type: 'sport',
    latitude: 50.4932938,
    longitude: 9.2400745,
    infos: 'https://koko-pelli.de',
  },
  {
    id: nanoid(),
    isFavorite: false,
    name: 'Stocherkahnrennen',
    location: 'Tübingen',
    duration: 'short',
    type: 'culture',
    latitude: 48.5236164,
    longitude: 9.0535531,
    infos: 'https://tuebingen-info.de',
  },
  {
    id: nanoid(),
    isFavorite: false,
    name: 'Wattwanderung',
    location: 'Neuwerk',
    duration: 'short',
    type: 'nature',
    latitude: 53.9224223,
    longitude: 8.5028594,
    infos: 'https://cuxhaven-neuwerk.de',
  },
  {
    id: nanoid(),
    isFavorite: false,
    name: 'Skywalk',
    location: 'Allgäu',
    duration: 'short',
    type: 'sport',
    latitude: 47.5926009,
    longitude: 10.209156,
    infos: 'https://skywalk-allgaeu.de',
  },
  {
    id: nanoid(),
    isFavorite: false,
    name: 'Karl-May-Spiele',
    location: 'Bad Segeberg',
    duration: 'weekend',
    type: 'culture',
    latitude: 53.9422672,
    longitude: 10.3137943,
    infos: 'https://karl-may-spiele.de',
  },
  {
    id: nanoid(),
    isFavorite: false,
    name: 'Lummensprung',
    location: 'Helgoland',
    duration: 'weekend',
    type: 'nature',
    latitude: 54.1800452,
    longitude: 7.8853621,
    infos: 'https://helgoland.de',
  },
  {
    id: nanoid(),
    isFavorite: false,
    name: 'Wörnitz Flussbad',
    location: 'Oettingen',
    duration: 'short',
    type: 'recovery',
    latitude: 48.95526885986328,
    longitude: 10.605217933654785,
    infos: 'https://oettingen.de/woernitz-flussfreibad',
  },
  {
    id: nanoid(),
    isFavorite: false,
    name: 'Dackelmuseum',
    location: 'Passau',
    duration: 'short',
    type: 'culture',
    latitude: 48.5748229,
    longitude: 13.4609744,
    infos: 'https://dackelmuseum.de',
  },
  {
    id: nanoid(),
    isFavorite: false,
    name: 'Opern-Festspiele',
    location: 'Heidenheim',
    duration: 'weekend',
    type: 'culture',
    latitude: 48.6767637,
    longitude: 10.152923,
    infos: 'https://opernfestspiele.de',
  },
  {
    id: nanoid(),
    isFavorite: false,
    name: 'Blautopf',
    location: 'Blaubeuren',
    duration: 'short',
    type: 'nature',
    latitude: 48.4121233,
    longitude: 9.7847091,
    infos: 'https://blautopf.de',
  },
  {
    id: nanoid(),
    isFavorite: false,
    name: 'Übernachten im Baumzelt',
    location: 'Witzenhausen',
    duration: 'weekend',
    type: 'nature',
    latitude: 51.3331901,
    longitude: 9.8434192,
    infos: 'https://robins-nest.de',
  },
  {
    id: nanoid(),
    isFavorite: false,
    name: 'Filmnächte am Elbufer',
    location: 'Dresden',
    duration: 'short',
    type: 'culture',
    latitude: 51.0493286,
    longitude: 13.7381437,
    infos: 'https://dresden.filmnaechte.de',
  },
  {
    id: nanoid(),
    isFavorite: false,
    name: 'Weisse Düne',
    location: 'Norderney',
    duration: 'vacation',
    type: 'recovery',
    latitude: 53.7122885,
    longitude: 7.2357795,
    infos: 'https://norderney.de',
  },
  {
    id: nanoid(),
    isFavorite: false,
    name: 'Stoneman Miriquidi',
    location: 'Erzgebirge',
    duration: 'vacation',
    type: 'sport',
    latitude: 50.4355522,
    longitude: 12.9489367,
    infos: 'https://stoneman-miriquidi.com',
  },
  {
    id: nanoid(),
    isFavorite: false,
    name: 'Schnelle Runden',
    location: 'Nürburgring',
    duration: 'weekend',
    type: 'challenge',
    latitude: 50.3309196,
    longitude: 6.9406742,
    infos: 'https://nuerburgring.de',
  },
  {
    id: nanoid(),
    isFavorite: false,
    name: 'Flaeming-Skate',
    location: 'Brandenburg',
    duration: 'weekend',
    type: 'sport',
    latitude: 52.8455492,
    longitude: 13.2461296,
    infos: 'https://flaeming-skate.de',
  },
  {
    id: nanoid(),
    isFavorite: false,
    name: 'Sternschnuppen',
    location: 'Nationalpark Eifel',
    duration: 'weekend',
    type: 'nature',
    latitude: 50.61957931518555,
    longitude: 6.411393165588379,
    infos: 'https://nationalpark-eifel.de/de/nationalpark-erleben/sternenpark',
  },
  {
    id: nanoid(),
    isFavorite: false,
    name: 'Klettern im Ith',
    location: 'Ith',
    duration: 'weekend',
    type: 'challenge',
    latitude: 52.002215,
    longitude: 9.6023941,
    infos: 'https://ig-klettern-niedersachsen.de',
  },
  {
    id: nanoid(),
    isFavorite: false,
    name: 'Drachenfels',
    location: 'Königswinter',
    duration: 'short',
    type: 'nature',
    latitude: 50.6739719,
    longitude: 7.1930989,
    infos: 'https://der-drachenfels.de',
  },
  {
    id: nanoid(),
    isFavorite: false,
    name: 'Noctalis',
    location: 'Bad Segeberg',
    duration: 'short',
    type: 'nature',
    latitude: 53.9422672,
    longitude: 10.3137943,
    infos: 'https://noctalis.de',
  },
  {
    id: nanoid(),
    isFavorite: false,
    name: 'Hüttentour um den Watzmann',
    location: 'Watzmann',
    duration: 'vacation',
    type: 'challenge',
    latitude: 47.5736495,
    longitude: 12.9429063,
    infos: 'https://berchtesgaden.de/berge-gipfel/watzmann/watzmann-huettentour',
  },
  {
    id: nanoid(),
    isFavorite: false,
    name: 'Burg Teck',
    location: 'Hohenneuffen',
    duration: 'short',
    type: 'nature',
    latitude: 48.5557598,
    longitude: 9.3927261,
    infos: 'https://schwaebischealb.org/schloesser-burgen/burg-teck',
  },
  {
    id: nanoid(),
    isFavorite: false,
    name: 'Museum Marta',
    location: 'Herford',
    duration: 'short',
    type: 'culture',
    latitude: 52.1152245,
    longitude: 8.6711118,
    infos: 'https://marta-herford.de',
  },
  {
    id: nanoid(),
    isFavorite: false,
    name: 'Radfahren im Eichsfeld',
    location: 'Eichsfeld',
    duration: 'vacation',
    type: 'sport',
    latitude: 50.556082,
    longitude: 9.6716646,
    infos: 'https://eichsfeld.de',
  },
  {
    id: nanoid(),
    isFavorite: false,
    name: 'Gleitschirmfliegen',
    location: 'Oberstdorf',
    duration: 'short',
    type: 'challenge',
    latitude: 47.4118318,
    longitude: 10.2781005,
    infos: 'https://ok-bergbahnen.com/aktiv-sport/gleitschirmfliegen',
  },
  {
    id: nanoid(),
    isFavorite: false,
    name: 'DAV-Kletter-Zentrum',
    location: 'München',
    duration: 'short',
    type: 'challenge',
    latitude: 48.1371079,
    longitude: 11.5753822,
    infos: 'https://kbthalkirchen.de',
  },
  {
    id: nanoid(),
    isFavorite: false,
    name: 'Fossilien am Strand',
    location: 'Rügen',
    duration: 'vacation',
    type: 'nature',
    latitude: 54.4224525,
    longitude: 13.3315713,
    infos: 'https://ruegen.de',
  },
  {
    id: nanoid(),
    isFavorite: false,
    name: 'Rutschenwelt',
    location: 'Erding',
    duration: 'short',
    type: 'recovery',
    latitude: 48.3064441,
    longitude: 11.9076579,
    infos: 'https://therme-erding.de',
  },
  {
    id: nanoid(),
    isFavorite: false,
    name: 'Hexentanz',
    location: 'Harz',
    duration: 'vacation',
    type: 'culture',
    latitude: 51.7249376,
    longitude: 10.6948924,
    infos: 'https://harzinfo.de/veranstaltungen/walpurgis-im-harz.html',
  },
];

export default db;
