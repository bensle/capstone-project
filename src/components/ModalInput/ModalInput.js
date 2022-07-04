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
    <Form aria-labelledby="addActivity" onSubmit={handleSubmit}>
      <Heading id="addActivity">Add your Activity</Heading>
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
  );
}

// const InputWrapper = styled.div`
//   display: grid;
//   align-items: center;
//   box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);
//   border-radius: 6px;
//   background-color: var(--bgcolor);
//   padding: 0.5rem;
//   text-align: center;
//   z-index: 10;
//   position: fixed;
//   top: 10vh;
//   left: 10vw;
//   right: 10vw;
//   bottom: 35vh;
// `;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 8px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);
  border: 2px solid white;
  border-radius: 6px;
  background-color: var(--modalbg);
  padding: 0.75rem;
  text-align: center;
  z-index: 10;
  position: fixed;
  top: 10%;
  left: 10%;
  right: 10%;
  bottom: auto;
`;

const Heading = styled.h2`
  margin: 0;
  font-size: 1.25rem;
`;
