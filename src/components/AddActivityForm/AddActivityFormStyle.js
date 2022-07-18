import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-wrap: wrap;
  gap: 5px;
  /* background-color: var(bgcolorcard); */
  /* margin: 20px; */
  /* text-align: center; */
  input {
    /* border: none; */
    /* border-radius: 6px;
    min-height: 25px;
    font-size: 0.9rem; */
  }
`;
export const WrapperFormDiv = styled.div`
  background-color: var(--bgcolorcard);
  padding: 10px 10px;
  margin: 0px 20px 0px 20px;
  border-radius: 10px;
`;
export const Heading = styled.h2`
  margin-bottom: 20px;
  font-size: 1.25rem;
  color: var(--textcolor);
`;
//-----Name--------------------------
export const NameLabel = styled.label`
  color: var(--textcolor);
  font-size: 0.925rem;
`;
export const NameInput = styled.input`
  border: none;
  border-radius: 5px;
  background-color: var(--bgcolor);
  color: var(--textcolor);
  padding: 7px 7px;
  margin-bottom: 20px;
  &:focus {
    outline: none;
    border: 1px solid;
    border-color: var(--colorAll);
  }
`;
//-----Location--------------------------
export const LocationLabel = styled.label`
  color: var(--textcolor);
  font-size: 0.925rem;
`;
export const SearchDiv = styled.div`
  background-color: var(--bgcolor);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
`;
export const LocationInput = styled.input`
  border: none;
  border-radius: 10px;
  background-color: var(--bgcolor);
  color: var(--textcolor);
  padding: 7px 7px;
  margin-bottom: 20px;
  &:focus {
    outline: none;
    border: 1px solid;
    border-color: var(--colorAll);
  }
`;
export const SearchResultDiv = styled.div`
  background-color: var(--bgcolor);
  border-radius: 10px;
  padding: 7px 7px;
  color: var(--textcolor);
  margin-top: 10px;
  cursor: pointer;
`;

export const AddSpan = styled.span`
  font-size: 1rem;
  position: relative;
  top: 2px;
  right: -5px;
`;
//---------------SELECT
export const StyledSelectDurationWrapper = styled.div`
  display: flex;
  justify-content: center;

  select {
    width: 50%;
    color: white;
    height: 1.5rem;
    background-color: var(--colorAll);
    border: none;
  }
`;

export const StyledSelectTypeWrapper = styled.div`
  display: flex;
  justify-content: center;

  select {
    width: 50%;
    height: 1.5rem;
    color: white;
    background-color: var(--colorAll);
    border: none;
  }
`;
//------------------------------------------
export const AddButton = styled.button`
  width: 50%;
  align-self: center;
  /* background-color: transparent; */
  border: 2px solid white;
  border-radius: 6px;
  color: white;
  padding: 3px;
`;
