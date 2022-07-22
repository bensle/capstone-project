import {OpenStreetMapProvider} from 'leaflet-geosearch';
import {nanoid} from 'nanoid';
import {useState, useRef} from 'react';
import {ImSearch} from 'react-icons/im';
import {IoMdClose} from 'react-icons/io';
import {MdOutlineAdd} from 'react-icons/md';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import useActivities from '../../hooks/useActivities';
import Header from '../Header/Header';

import * as Style from './AddActivityFormStyle';

export default function AddActivityForm() {
  const [formData, setFormData] = useState({id: '', name: '', location: '', duration: '', type: '', infos: ''}); //has InputData from all inputs except location
  const [location, setLocation] = useState([]); //has all locationInputSearchData
  const [locationData, setLocationData] = useState({location: '', latitude: '', longitude: ''}); // has Data chosen from listed results
  const {setActivityHandler} = useActivities();
  const refInput = useRef();

  const EMAIL = process.env.EMAIL;
  const notify = () =>
    toast.success('New Activity added!', {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  //------------------set Provider and specify data---------------------------------------------------------
  const provider = new OpenStreetMapProvider({
    params: {
      email: EMAIL,
      'accept-language': 'de',
      countrycodes: 'de',
      limit: 3,
    },
  });

  const clearInput = () => {
    setLocation([]);
    setLocationData('');
    refInput.current.value = '';
  };

  //add clicked to locationResults; useRef sets input to clicked value; locationData has location, lat & long.
  function addLocation(x) {
    const newLocation = location.find(loc => loc.x === x);
    refInput.current.value = newLocation.label.substring(0, newLocation.label.indexOf(','));
    setLocationData({
      location: newLocation.label.substring(0, newLocation.label.indexOf(',')),
      latitude: newLocation.y,
      longitude: newLocation.x,
    });
    setLocation([]);
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
    setActivityHandler({
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
    setLocationData([]);
  };
  return (
    <>
      <Header />
      <Style.WrapperFormDiv>
        <Style.Form aria-labelledby="addActivity" onSubmit={handleSubmit}>
          <Style.Heading id="addActivity">Add your Activity</Style.Heading>

          <Style.NameLabel htmlFor="name">Name of your activity</Style.NameLabel>
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
          <Style.SearchDiv>
            <Style.SearchInputDiv>
              <Style.LocationInput
                ref={refInput}
                type="text"
                name="location"
                id="location"
                required
                autoComplete="off"
                maxLength="30"
                onChange={handleChangeLocation}
              />
              <Style.SearchIconDiv>
                {location.length === 0 ? <ImSearch /> : <IoMdClose onClick={clearInput} />}
              </Style.SearchIconDiv>
            </Style.SearchInputDiv>
            {location.length !== 0 && (
              <Style.ResultDiv>
                <Style.ResultList role="list">
                  {location.map(({x, label}) => {
                    return (
                      <Style.ResultItem key={x} onClick={() => addLocation(x)}>
                        {label}
                      </Style.ResultItem>
                    );
                  })}
                </Style.ResultList>
              </Style.ResultDiv>
            )}
          </Style.SearchDiv>

          <Style.Durationlabel htmlFor="duration">
            Duration of your Activity?
            <Style.DurationSelect
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
            </Style.DurationSelect>
          </Style.Durationlabel>
          <Style.TypeLabel htmlFor="type">
            Type of your Activity?
            <Style.TypeSelect
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
            </Style.TypeSelect>
          </Style.TypeLabel>
          <Style.InfosLabel htmlFor="infos">
            Add an URL for more Infos <Style.InfoSpan>e.g. https://example.de</Style.InfoSpan>
          </Style.InfosLabel>
          <Style.InfosInput
            type="text"
            name="infos"
            id="infos"
            autoComplete="off"
            onChange={handleChange}
          ></Style.InfosInput>
          <Style.AddButton
            disabled={!formData.name || !formData.type || !formData.duration || !locationData.location}
            type="submit"
            onClick={notify}
          >
            Add Activity
            <Style.AddSpan>
              <MdOutlineAdd />
            </Style.AddSpan>
          </Style.AddButton>
          <Style.Toast
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss={false}
            draggable
            pauseOnHove
            theme="dark"
            Type="success"
          />
        </Style.Form>
      </Style.WrapperFormDiv>
    </>
  );
}
