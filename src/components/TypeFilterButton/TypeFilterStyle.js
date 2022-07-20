import styled from 'styled-components';

export const TypeSection = styled.section`
  padding: 0 10px;
`;
export const TypeSpan = styled.span`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const FilterHeading = styled.h2`
  text-align: left;
  font-size: 0.925rem;
  font-weight: 500;
  @media (min-width: 600px) {
    margin-top: 10px;
  }
`;
export const RadioTypeForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;

  input[type='radio'] {
    opacity: 0;
    position: fixed;
    width: 0;
  }
  label {
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
  }
  input[type='radio']:checked + label {
    background-color: var(--colorAll);
  }
`;
