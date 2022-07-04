import {MdClose, MdOutlineAdd} from 'react-icons/md';

import {Form, Heading, StyledSelectDuration, StyledSelectType, Button, CancelSpan, AddSpan} from './ModalInputStyle';

export default function ModalInput({onHandleChange, onHandleSubmit, onClose}) {
  return (
    <Form aria-labelledby="addActivity" onSubmit={onHandleSubmit}>
      <Heading id="addActivity">Add your Activity</Heading>
      <CancelSpan>
        <MdClose onClick={onClose} />
      </CancelSpan>
      <label htmlFor="name"> Name of your activity</label>
      <input
        type="text"
        name="name"
        id="name"
        required
        autoComplete="off"
        maxLength={30}
        onChange={onHandleChange}
      ></input>
      <label htmlFor="location">Location of your activity</label>
      <input
        type="text"
        name="location"
        id="location"
        required
        autoComplete="off"
        maxLength={30}
        onChange={onHandleChange}
      ></input>
      <label htmlFor="duration">
        Duration of your Activity?
        <StyledSelectDuration>
          <select
            name="duration"
            id="duration"
            onChange={onHandleChange}
            placeholder="Select Option"
            defaultValue="default"
          >
            <option value="default" disabled hidden>
              Duration
            </option>
            <option value="short">Day Trip</option>
            <option value="weekend">Weekend</option>
            <option value="vacation">3 Days +</option>
          </select>
        </StyledSelectDuration>
      </label>
      <label htmlFor="type">
        Type of your Activity?
        <StyledSelectType>
          <select
            required
            name="type"
            id="type"
            onChange={onHandleChange}
            placeholder="Select Option"
            defaultValue="default"
          >
            <option value="default" disabled hidden>
              Type
            </option>
            <option value="culture">Culture</option>
            <option value="nature">Nature</option>
            <option value="sport">Sport</option>
            <option value="recovery">Recovery</option>
            <option value="challenge">Challenge</option>
          </select>
        </StyledSelectType>
      </label>
      <label htmlFor="infos"> Add an URL for more Infos</label>
      <input
        // data-val="true"
        // data-val-url="The URL field is not a valid fully-qualified http, https, or ftp URL."
        type="url"
        name="infos"
        id="infos"
        autoComplete="off"
        placeholder="https://example.com"
        pattern="https://.*"
        onChange={onHandleChange}
      ></input>
      <Button type="submit">
        Add activity
        <AddSpan>
          <MdOutlineAdd />
        </AddSpan>
      </Button>
    </Form>
  );
}
