import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-wrap: wrap;
  gap: 5px;
`;
export const WrapperFormDiv = styled.div`
  background-color: var(--bgcolorcard);
  padding: 10px 10px;
  margin: 0 20px 0 20px;
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
  border-radius: 10px;
  background-color: var(--bgcolor);
  color: var(--textcolor);
  padding: 7px 7px;
  margin-bottom: 20px;
  height: 2rem;
  &:focus {
    outline: none;
  }
`;
//-----Location & Search--------------------------
export const LocationLabel = styled.label`
  color: var(--textcolor);
  font-size: 0.925rem;
`;
export const SearchDiv = styled.div`
  background-color: var(--bgcolor);
  border-radius: 10px;
  margin-bottom: 20px;
`;

export const SearchInputDiv = styled.div`
  display: flex;
`;
export const SearchIconDiv = styled.div`
  height: 2rem;
  width: 3rem;
  display: grid;
  place-items: center;
`;
export const LocationInput = styled.input`
  border: none;
  border-radius: 10px;
  background-color: var(--bgcolor);
  color: var(--textcolor);
  padding: 7px 7px;
  width: 100%;
  font-size: 0.925rem;
  &:focus {
    outline: none;
  }
`;
export const ResultList = styled.ul`
  margin-bottom: 20px;
  background-color: var(--bgcolor);
  list-style-type: none;
  padding: 7px 7px;
  margin-top: 10px;
  color: var(--textcolor);
  font-size: 0.925rem;
  position: absolute;
  width: 100%;
  border-radius: 10px;
`;
export const ResultItem = styled.li`
  background-color: var(--bgcolor);
  color: var(--textcolor);
  padding: 7px 7px;
  font-size: 0.925rem;
  position: relative;
`;
export const ResultDiv = styled.div`
  position: relative;
`;
//---------Infos & URL-------------------------------------
export const InfosLabel = styled.label`
  color: var(--textcolor);
  font-size: 0.925rem;
`;
export const InfosInput = styled.input`
  border: none;
  border-radius: 10px;
  background-color: var(--bgcolor);
  color: var(--textcolor);
  padding: 7px 7px;
  margin-bottom: 20px;
  &:focus {
    outline: none;
  }
`;
//--------Select--------------------------------------------------
export const Durationlabel = styled.label`
  color: var(--textcolor);
  font-size: 0.925rem;
`;
export const StyledSelectDurationWrapper = styled.div`
  /* display: flex;
  justify-content: center; */
`;

export const DurationSelect = styled.select`
  margin-bottom: 20px;
  width: 100%;
  height: 2rem;
  color: var(--textcolor);
  font-size: 0.925rem;
  background-color: var(--colorAll);
  border: none;
  border-radius: 10px;
  padding: 7px 7px;
  &:focus {
    outline: none;
    color: var(--colorAll);
    background-color: var(--textcolor);
  }
`;
export const TypeLabel = styled.label`
  color: var(--textcolor);
  font-size: 0.925rem;
`;
export const StyledSelectTypeWrapper = styled.div`
  display: flex;
  justify-content: center;
`;
export const TypeSelect = styled.select`
  margin-bottom: 20px;
  width: 100%;
  height: 2rem;
  color: var(--textcolor);
  font-size: 0.925rem;
  background-color: var(--colorAll);
  border: none;
  border-radius: 10px;
  padding: 7px 7px;
  &:focus {
    outline: none;
    color: var(--colorAll);
    background-color: var(--textcolor);
  }
`;
//------------------------------------------
export const AddButton = styled.button`
  margin-bottom: 20px;
  width: 50%;
  border: none;
  align-self: center;
  background-color: var(--colorAll);
  border-radius: 10px;
  color: var(--textcolor);
  padding: 7px 7px;
  font-size: 0.925rem;
  &:hover {
    background-color: var(--textcolor);
    color: var(--colorAll);
  }
`;

export const AddSpan = styled.span`
  color: var(--colorShort);
  font-size: 1rem;
  position: relative;
  top: 2px;
  right: -5px;
`;
export const InfoSpan = styled.span`
  display: block;
  font-style: italic;
  color: var(--colorShort);
`;
