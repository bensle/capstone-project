import {OpenStreetMapProvider} from 'leaflet-geosearch';
import {nanoid} from 'nanoid';
import {useState, useRef} from 'react';
import {MdOutlineAdd} from 'react-icons/md';
import styled from 'styled-components';

import {
  Form,
  Heading,
  StyledSelectDurationWrapper,
  StyledSelectTypeWrapper,
  Button,
  AddSpan,
} from './AddActivityFormStyle';

export default function AddActivityForm({onSetActivities}) {
  const [formData, setFormData] = useState({id: '', name: '', location: '', duration: '', type: '', infos: ''}); //has InputData from all inputs except location
  const [location, setLocation] = useState([]); //has all locationInputSearchData
  const [locationData, setLocationData] = useState({location: '', latitude: '', longitude: ''}); // has Data chosen from listed results
  const refInput = useRef();

  const EMAIL = process.env.EMAIL;

  //------------------HANDLER FÜR LOCATIONSEARCHBAR------------------------------------------------------------------------------------------------------
  const provider = new OpenStreetMapProvider({
    params: {
      email: EMAIL,
      'accept-language': 'de',
      countrycodes: 'de',
      limit: 4,
    },
  });

  //add clicked to locationResults; useRef sets input to clicked value; locationData has location, lat & long.
  function addLocation(x) {
    const newLocation = location.find(loc => loc.x === x);
    refInput.current.value = newLocation.label.substring(0, newLocation.label.indexOf(','));
    setLocationData({
      location: newLocation.label.substring(0, newLocation.label.indexOf(',')),
      latitude: newLocation.y,
      longitude: newLocation.x,
    });
  }
  // locationInputHandler - geosearch -------------------------------------------------------------------------------------
  const handleChangeLocation = async event => {
    const inputLocation = event.target.value;
    const results = await provider.search({query: inputLocation});
    setLocation(results);
  };
  //----- Data from Input --------------------------------------------------------------------------------------------------
  const handleChange = event => {
    setFormData({...formData, [event.target.name]: event.target.value});
  };
  //----- Submithandler (add all input as object to state and closes modal after submit) -----
  const handleSubmit = event => {
    event.preventDefault();
    const newInfos =
      formData.infos.indexOf('https://') !== 0
        ? (formData.infos = 'https://' + formData.infos.trim().toLowerCase())
        : formData.infos.trim().toLowerCase();
    onSetActivities({
      id: nanoid(),
      isFavorite: false,
      name: formData.name.trim(),
      location: locationData.location.trim(),
      duration: formData.duration,
      type: formData.type,
      latitude: locationData.latitude,
      longitude: locationData.longitude,
      infos: newInfos,
    });
  };
  return (
    <Form aria-labelledby="addActivity" onSubmit={handleSubmit}>
      <Heading id="addActivity">Add your Activity</Heading>

      <label htmlFor="name"> Name of your activity</label>
      <input
        type="text"
        name="name"
        id="name"
        required
        autoComplete="off"
        maxLength="30"
        onChange={handleChange}
      ></input>

      <label htmlFor="location">Location of your activity</label>
      <SearchDiv>
        <LocationInput
          ref={refInput}
          type="text"
          name="location"
          id="location"
          required
          autoComplete="off"
          maxLength="30"
          onChange={handleChangeLocation}
        ></LocationInput>
        {location.map(({x, label}) => (
          <SearchDivResult key={x} onClick={() => addLocation(x)}>
            {label}
          </SearchDivResult>
        ))}
      </SearchDiv>

      <label htmlFor="duration">
        Duration of your Activity?
        <StyledSelectDurationWrapper>
          <select
            required
            name="duration"
            id="duration"
            onChange={handleChange}
            placeholder="Select Option"
            defaultValue=""
          >
            <option value="" disabled hidden>
              Duration
            </option>
            <option value="short">Day Trip</option>
            <option value="weekend">Weekend</option>
            <option value="vacation">3 Days +</option>
          </select>
        </StyledSelectDurationWrapper>
      </label>
      <label htmlFor="type">
        Type of your Activity?
        <StyledSelectTypeWrapper>
          <select required name="type" id="type" onChange={handleChange} placeholder="Select Option" defaultValue="">
            <option value="" disabled hidden>
              Type
            </option>
            <option value="culture">Culture</option>
            <option value="nature">Nature</option>
            <option value="sport">Sport</option>
            <option value="recovery">Recovery</option>
            <option value="challenge">Challenge</option>
          </select>
        </StyledSelectTypeWrapper>
      </label>
      <label htmlFor="infos"> Add an URL for more Infos</label>
      <input
        type="text"
        name="infos"
        id="infos"
        autoComplete="off"
        placeholder="https://example.de"
        onChange={handleChange}
      ></input>
      <Button type="submit">
        Add Activity
        <AddSpan>
          <MdOutlineAdd />
        </AddSpan>
      </Button>
    </Form>
  );
}
const SearchDiv = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
`;

const SearchDivResult = styled.div`
  background-color: white;
  color: black;
  margin-top: 10px;
  cursor: pointer;
`;

const LocationInput = styled.input`
  border: none;
  width: 100%;
  outline: none;
  line-height: 48px;
  color: gray;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.16), 0 0 0 1px rgba(0, 0, 0, 0.08);
`;
