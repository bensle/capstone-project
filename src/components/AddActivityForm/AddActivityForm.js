import {nanoid} from 'nanoid';
import {useState} from 'react';
import {MdOutlineAdd} from 'react-icons/md';

import {
  Form,
  Heading,
  StyledSelectDurationWrapper,
  StyledSelectTypeWrapper,
  Button,
  AddSpan,
} from './AddActivityFormStyle';

export default function AddActivityForm({onSetActivities}) {
  const [formData, setFormData] = useState({id: '', name: '', location: '', duration: '', type: '', infos: ''});

  //----- Data from Input -----
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
      name: formData.name.trim(),
      location: formData.location.trim().replace(/[^a-z]/gi, ' '),
      duration: formData.duration,
      type: formData.type,
      infos: newInfos,
      isFavorite: false,
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
      <input
        type="text"
        name="location"
        id="location"
        required
        autoComplete="off"
        maxLength="30"
        onChange={handleChange}
      ></input>
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
