import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-wrap: wrap;
  gap: 5px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);
  border: 2px solid white;
  border-radius: 6px;
  background-color: var(--modalbg);
  margin: 20px;
  text-align: center;
  input {
    border: none;
    border-radius: 6px;
    min-height: 25px;
    font-size: 0.9rem;
  }
`;

export const CancelSpan = styled.span`
  font-size: 32px;
  color: red;
  position: absolute;
  top: 0;
  right: 0;
`;

export const AddSpan = styled.span`
  font-size: 1rem;
  color: limegreen;
  position: relative;
  top: 2px;
  right: -5px;
`;

export const Heading = styled.h2`
  margin: 0;
  font-size: 1.25rem;
`;

export const StyledSelectDurationWrapper = styled.div`
  display: flex;
  justify-content: center;

  select {
    width: 50%;
    color: white;
    height: 1.5rem;
    background-color: var(--greenish);
    border: none;
    border-radius: 6px;
    font-style: italic;
  }
`;

export const StyledSelectTypeWrapper = styled.div`
  display: flex;
  justify-content: center;

  select {
    width: 50%;
    height: 1.5rem;
    color: white;
    background-color: var(--orange);
    border: none;
    border-radius: 6px;
    font-style: italic;
  }
`;

export const Button = styled.button`
  width: 50%;
  align-self: center;
  background-color: transparent;
  border: 2px solid white;
  border-radius: 6px;
  color: white;
  padding: 3px;
`;
