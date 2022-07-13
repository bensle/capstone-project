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
  const [formInput, setFormInput] = useState({id: '', name: '', location: '', duration: '', type: '', infos: ''});

  //----- Data from Input -----
  const handleChange = event => {
    setFormInput({...formInput, [event.target.name]: event.target.value});
  };
  //----- Submithandler (add all input as object to state and closes modal after submit) -----
  const handleSubmit = event => {
    event.preventDefault();
    const newInfos =
      formInput.infos.indexOf('https://') !== 0
        ? (formInput.infos = 'https://' + formInput.infos.trim().toLowerCase())
        : formInput.infos.trim().toLowerCase();
    onSetActivities(current => [
      ...current,
      {
        id: nanoid(),
        name: formInput.name.trim(),
        location: formInput.location.trim().replace(/[^a-z]/gi, ' '),
        duration: formInput.duration,
        type: formInput.type,
        infos: newInfos,
        isFavorite: false,
      },
    ]);
  };

  return (
    <Form aria-labelledby="addActivity" onSubmit={event => handleSubmit(event)}>
      <Heading id="addActivity">Add your Activity</Heading>

      <label htmlFor="name"> Name of your activity</label>
      <input
        type="text"
        name="name"
        id="name"
        required
        autoComplete="off"
        maxLength="30"
        onChange={event => handleChange(event)}
      ></input>
      <label htmlFor="location">Location of your activity</label>
      <input
        type="text"
        name="location"
        id="location"
        required
        autoComplete="off"
        maxLength="30"
        onChange={event => handleChange(event)}
      ></input>
      <label htmlFor="duration">
        Duration of your Activity?
        <StyledSelectDurationWrapper>
          <select
            required
            name="duration"
            id="duration"
            onChange={event => handleChange(event)}
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
          <select
            required
            name="type"
            id="type"
            onChange={event => handleChange(event)}
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
        </StyledSelectTypeWrapper>
      </label>
      <label htmlFor="infos"> Add an URL for more Infos</label>
      <input
        type="text"
        name="infos"
        id="infos"
        autoComplete="off"
        placeholder="https://example.de"
        onChange={event => handleChange(event)}
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
