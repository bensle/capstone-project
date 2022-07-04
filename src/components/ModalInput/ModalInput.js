import {useState} from 'react';
import styled from 'styled-components';
export default function ModalInput() {
  const [formInput, setFormInput] = useState({name: '', location: '', duration: '', type: '', infos: ''});

  const handleChange = event => {
    setFormInput({...formInput, [event.target.name]: event.target.value});
  };
  const handleSubmit = event => {
    event.preventDefault();
    console.log('Created', formInput);
  };

  return (
    <InputWrapper>
      <Form aria-labelledby="addActivity" onSubmit={handleSubmit}>
        <h2 id="addActivity">Add your Activity</h2>
        <label htmlFor="name"> Name of your activity</label>
        <input type="text" name="name" id="name" required onChange={handleChange}></input>
        <label htmlFor="location">Location of your activity</label>
        <input type="text" name="location" id="location" required onChange={handleChange}></input>
        <label htmlFor="duration">
          Duration of your Activity?
          <select
            name="duration"
            id="duration"
            onChange={handleChange}
            placeholder="Select Option"
            defaultValue="default"
          >
            <option value="default" disabled hidden></option>
            <option value="short">Day Trip</option>
            <option value="weekend">Weekend</option>
            <option value="vacation">3 Days +</option>
          </select>
        </label>
        <label htmlFor="type">
          Type of your Activity?
          <select
            required
            name="type"
            id="type"
            onChange={handleChange}
            placeholder="Select Option"
            defaultValue="default"
          >
            <option value="default" disabled hidden></option>
            <option value="culture">Culture</option>
            <option value="nature">Nature</option>
            <option value="sport">Sport</option>
            <option value="recovery">Recovery</option>
            <option value="challenge">Challenge</option>
          </select>
        </label>
        <label htmlFor="infos"> Add an URL for more Infos</label>
        <input type="text" name="infos" id="infos" onChange={handleChange}></input>
        <button type="submit">Add activity</button>
      </Form>
    </InputWrapper>
  );
}

const InputWrapper = styled.div`
  display: grid;
  align-items: center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;
