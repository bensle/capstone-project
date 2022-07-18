import {OpenStreetMapProvider} from 'leaflet-geosearch';
import {nanoid} from 'nanoid';
import {useState, useRef} from 'react';
import {MdOutlineAdd} from 'react-icons/md';
import styled from 'styled-components';

import Header from '../Header/Header';

import * as Style from './AddActivityFormStyle';
// import {
//   Form,
//   Heading,
//   StyledSelectDurationWrapper,
//   StyledSelectTypeWrapper,
//   AddButton,
//   AddSpan,
//   WrapperFormDiv,
// } from './AddActivityFormStyle';

export default function AddActivityForm({onSetActivities}) {
  const [formData, setFormData] = useState({id: '', name: '', location: '', duration: '', type: '', infos: ''}); //has InputData from all inputs except location
  const [location, setLocation] = useState([]); //has all locationInputSearchData
  const [locationData, setLocationData] = useState({location: '', latitude: '', longitude: ''}); // has Data chosen from listed results
  const refInput = useRef();

  const EMAIL = process.env.EMAIL;

  //------------------set Provider and specify data---------------------------------------------------------
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
    <>
      <Header />
      <Style.WrapperFormDiv>
        <Style.Form aria-labelledby="addActivity" onSubmit={handleSubmit}>
          <Style.Heading id="addActivity">Add your Activity</Style.Heading>

          <Style.NameLabel htmlFor="name"> Name of your activity</Style.NameLabel>
          <Style.NameInput
            type="text"
            name="name"
            id="name"
            required
            autoComplete="off"
            maxLength="30"
            onChange={handleChange}
          ></Style.NameInput>

          <Style.LocationLabel htmlFor="location">Location of your activity</Style.LocationLabel>
          {/* <Style.SearchDiv> */}
          <Style.LocationInput
            ref={refInput}
            type="text"
            name="location"
            id="location"
            required
            autoComplete="off"
            maxLength="30"
            onChange={handleChangeLocation}
          ></Style.LocationInput>
          {location.map(({x, label}) => (
            <span key={x} onClick={() => addLocation(x)}>
              {label}
            </span>
          ))}
          {/* </Style.SearchDiv> */}

          <label htmlFor="duration">
            Duration of your Activity?
            <Style.StyledSelectDurationWrapper>
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
            </Style.StyledSelectDurationWrapper>
          </label>
          <label htmlFor="type">
            Type of your Activity?
            <Style.StyledSelectTypeWrapper>
              <select
                required
                name="type"
                id="type"
                onChange={handleChange}
                placeholder="Select Option"
                defaultValue=""
              >
                <option value="" disabled hidden>
                  Type
                </option>
                <option value="culture">Culture</option>
                <option value="nature">Nature</option>
                <option value="sport">Sport</option>
                <option value="recovery">Recovery</option>
                <option value="challenge">Challenge</option>
              </select>
            </Style.StyledSelectTypeWrapper>
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
          <Style.AddButton type="submit">
            Add Activity
            <Style.AddSpan>
              <MdOutlineAdd />
            </Style.AddSpan>
          </Style.AddButton>
        </Style.Form>
      </Style.WrapperFormDiv>
    </>
  );
}
