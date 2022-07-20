import styled from 'styled-components';

export const DurationSection = styled.section`
  padding: 0 10px;
`;
export const DurationSpan = styled.span`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const FilterHeading = styled.h2`
  text-align: left;
  font-size: 0.925rem;
  font-weight: 500;
`;
export const RadioDurationForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;

  input[type='radio'] {
    opacity: 0;
    position: fixed;
    width: 0;
  }
`;
export const AllLabel = styled.label`
  display: flex;
  align-items: center;
  font-size: 0.925rem;
  gap: 1.25rem;
  padding: 5px 10px;
  background: var(--bgcolorcard);
  border-radius: 10px;
  cursor: pointer;
  &:hover {
    background-color: var(--colorAll);
  }
`;
export const AllInput = styled.input`
  &:checked + label {
    background-color: var(--colorAll);
  }
`;
export const ShortLabel = styled.label`
  display: flex;
  align-items: center;
  font-size: 0.925rem;
  gap: 1.25rem;
  padding: 5px 10px;
  background: var(--bgcolorcard);
  border-radius: 10px;
  cursor: pointer;
  &:hover {
    background-color: var(--colorAll);
  }
`;

export const ShortInput = styled.input`
  &:checked + label {
    background-color: var(--colorShort);
  }
`;
export const MiddleLabel = styled.label`
  display: flex;
  align-items: center;
  font-size: 0.925rem;
  gap: 1.25rem;
  padding: 5px 10px;
  background: var(--bgcolorcard);
  border-radius: 10px;
  cursor: pointer;
  &:hover {
    background-color: var(--colorAll);
  }
`;

export const MiddleInput = styled.input`
  &:checked + label {
    background-color: var(--colorMiddle);
  }
`;
export const LongLabel = styled.label`
  display: flex;
  align-items: center;
  font-size: 0.925rem;
  gap: 1.25rem;
  padding: 5px 10px;
  background: var(--bgcolorcard);
  border-radius: 10px;
  cursor: pointer;
  &:hover {
    background-color: var(--colorAll);
  }
`;

export const LongInput = styled.input`
  &:checked + label {
    background-color: var(--colorLong);
  }
`;
