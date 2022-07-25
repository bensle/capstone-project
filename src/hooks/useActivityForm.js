import {OpenStreetMapProvider} from 'leaflet-geosearch';
import {nanoid} from 'nanoid';
import {useState, useRef} from 'react';
import {toast} from 'react-toastify';

import useActivities from './useActivities';

export default function useActivityForm() {
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
  return {
    location,
    formData,
    locationData,
    notify,
    refInput,
    clearInput,
    addLocation,
    handleChangeLocation,
    handleChange,
    handleSubmit,
  };
}
