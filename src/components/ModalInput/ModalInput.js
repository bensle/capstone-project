import {MdClose, MdOutlineAdd} from 'react-icons/md';

import {
  Form,
  Heading,
  StyledSelectDurationWrapper,
  StyledSelectTypeWrapper,
  Button,
  CancelSpan,
  AddSpan,
} from './ModalInputStyle';

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
        <StyledSelectDurationWrapper>
          <select
            required
            name="duration"
            id="duration"
            onChange={onHandleChange}
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
          <select required name="type" id="type" onChange={onHandleChange} placeholder="Select Option" defaultValue="">
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
        onChange={onHandleChange}
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
