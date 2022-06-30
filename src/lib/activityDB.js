import {nanoid} from 'nanoid';
const db = [
  {
    id: nanoid(),
    name: 'Freudenberg',
    location: 'Siegerland',
    duration: 'short',
    type: 'culture',
    infos: 'https://www.freudenberg-wirkt.de/',
  },
  {
    id: nanoid(),
    name: 'Kreidedampfbad',
    location: 'Binz',
    duration: 'vacation',
    type: 'recovery',
    infos: 'https://www.ruegen.de',
  },
  {
    id: nanoid(),
    name: 'Luftkurort',
    location: 'Mittenwald',
    duration: 'weekend',
    type: 'recovery',
    infos: 'https://alpenwelt-karwendel.de',
  },
  {
    id: nanoid(),
    name: 'Drei Kilometer Spass',
    location: 'Bremen',
    duration: 'short',
    type: 'nature',
    infos: 'https://bremer-eisverein.de',
  },
  {
    id: nanoid(),
    name: 'Fatbike',
    location: 'Vogelsberg',
    duration: 'short',
    type: 'sport',
    infos: 'https://koko-pelli.de',
  },
  {
    id: nanoid(),
    name: 'Stocherkahnrennen',
    location: 'Tübingen',
    duration: 'short',
    type: 'culture',
    infos: 'https://tuebingen-info.de',
  },
  {
    id: nanoid(),
    name: 'Wattwanderung',
    location: 'Neuwerk',
    duration: 'short',
    type: 'nature',
    infos: 'https://cuxhaven-neuwerk.de',
  },
  {
    id: nanoid(),
    name: 'Skywalk',
    location: 'Allgäu',
    duration: 'short',
    type: 'sport',
    infos: 'https://skywalk-allgaeu.de',
  },
  {
    id: nanoid(),
    name: 'Karl-May-Spiele',
    location: 'Bad Segeberg',
    duration: 'weekend',
    type: 'culture',
    infos: 'https://karl-may-spiele.de',
  },
  {
    id: nanoid(),
    name: 'Lummensprung',
    location: 'Helgoland',
    duration: 'weekend',
    type: 'nature',
    infos: 'https://helgoland.de',
  },
  {
    id: nanoid(),
    name: 'Wörnitz Flussbad',
    location: 'Oettingen',
    duration: 'short',
    type: 'recovery',
    infos: 'https://oettingen.de/woernitz-flussfreibad',
  },
  {
    id: nanoid(),
    name: 'Dackelmuseum',
    location: 'Passau',
    duration: 'short',
    type: 'culture',
    infos: 'https://dackelmuseum.de',
  },
  {
    id: nanoid(),
    name: 'Opern-Festspiele',
    location: 'Heidenheim',
    duration: 'weekend',
    type: 'culture',
    infos: 'https://opernfestspiele.de',
  },
  {
    id: nanoid(),
    name: 'Blautopf',
    location: 'Blaubeuren',
    duration: 'short',
    type: 'nature',
    infos: 'https://blautopf.de',
  },
  {
    id: nanoid(),
    name: 'Übernachten im Baumzelt',
    location: 'Witzenhausen',
    duration: 'weekend',
    type: 'nature',
    infos: 'https://robins-nest.de',
  },
  {
    id: nanoid(),
    name: 'Filmnächte am Elbufer',
    location: 'Dresden',
    duration: 'short',
    type: 'culture',
    infos: 'https://dresden.filmnaechte.de',
  },
  {
    id: nanoid(),
    name: 'Weisse Düne',
    location: 'Norderney',
    duration: 'vacation',
    type: 'recovery',
    infos: 'https://norderney.de',
  },
  {
    id: nanoid(),
    name: 'Stoneman Miriquidi',
    location: 'Erzgebirge',
    duration: 'vacation',
    type: 'sport',
    infos: 'https://stoneman-miriquidi.com',
  },
  {
    id: nanoid(),
    name: 'Schnelle Runden',
    location: 'Nürburgring',
    duration: 'weekend',
    type: 'challenge',
    infos: 'https://nuerburgring.de',
  },
  {
    id: nanoid(),
    name: 'Flaeming-Skate',
    location: 'Brandenburg',
    duration: 'weekend',
    type: 'sport',
    infos: 'https://flaeming-skate.de',
  },
  {
    id: nanoid(),
    name: 'Sternschnuppen',
    location: 'Nationalpark Eifel',
    duration: 'weekend',
    type: 'nature',
    infos: 'https://nationalpark-eifel.de/de/nationalpark-erleben/sternenpark',
  },
  {
    id: nanoid(),
    name: 'Klettern im Ith',
    location: 'Ith',
    duration: 'weekend',
    type: 'challenge',
    infos: 'https://ig-klettern-niedersachsen.de',
  },
  {
    id: nanoid(),
    name: 'Drachenfels',
    location: 'Königswinter',
    duration: 'short',
    type: 'nature',
    infos: 'https://der-drachenfels.de',
  },
  {
    id: nanoid(),
    name: 'Noctalis',
    location: 'Bad Segeberg',
    duration: 'short',
    type: 'nature',
    infos: 'https://noctalis.de',
  },
  {
    id: nanoid(),
    name: 'Hüttentour um den Watzmann',
    location: 'Watzmann',
    duration: 'vacation',
    type: 'challenge',
    infos: 'https://berchtesgaden.de/berge-gipfel/watzmann/watzmann-huettentour',
  },
  {
    id: nanoid(),
    name: 'Burg Teck',
    location: 'Hohenneuffen',
    duration: 'short',
    type: 'nature',
    infos: 'https://schwaebischealb.org/schloesser-burgen/burg-teck',
  },
  {
    id: nanoid(),
    name: 'Museum Marta',
    location: 'Herford',
    duration: 'short',
    type: 'culture',
    infos: 'https://marta-herford.de',
  },
  {
    id: nanoid(),
    name: 'Radfahren im Eichsfeld',
    location: 'Eichsfeld',
    duration: 'vacation',
    type: 'sport',
    infos: 'https://eichsfeld.de',
  },
  {
    id: nanoid(),
    name: 'Gleitschirmfliegen',
    location: 'Oberstdorf',
    duration: 'short',
    type: 'challenge',
    infos: 'https://ok-bergbahnen.com/aktiv-sport/gleitschirmfliegen',
  },
  {
    id: nanoid(),
    name: 'DAV-kletter-Zentrum',
    location: 'München',
    duration: 'short',
    type: 'challenge',
    infos: 'https://kbthalkirchen.de',
  },
  {
    id: nanoid(),
    name: 'Fossilien am Stran',
    location: 'Rügen',
    duration: 'vacation',
    type: 'nature',
    infos: 'https://ruegen.de',
  },
  {
    id: nanoid(),
    name: 'Rutschenwelt',
    location: 'Erding',
    duration: 'short',
    type: 'recovery',
    infos: 'https://therme-erding.de',
  },
  {
    id: nanoid(),
    name: 'Hexentanz',
    location: 'Harz',
    duration: 'vacation',
    type: 'culture',
    infos: 'https://harzinfo.de/veranstaltungen/walpurgis-im-harz.html',
  },
];

export default db;
