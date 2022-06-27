import styled from 'styled-components';

const CardWrapper = styled.div`
  display: grid;
  gap: 10px;

  section {
    border: 1px solid;
    border-radius: 10px;
    padding-bottom: 5px;
  }
  h2 {
    font-size: 1.25rem;
  }
  h3 {
    font-size: 1rem;
  }
  p {
    border: 1px solid;
    border-radius: 10px;
  }
  a {
    color: red;
  }
`;
export default CardWrapper;
