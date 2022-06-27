import styled from 'styled-components';

const CardWrapper = styled.div`
  display: grid;
  gap: 10px;
  overflow-y: auto;

  section {
    border: 1px solid;
    border-radius: 5px;
    padding: 5px;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
  }
  h2 {
    font-size: 1.25rem;
    margin: 5px 0 0 0;
  }
  h3 {
    font-size: 1rem;
    font-style: italic;
    margin: 0;
  }
  ul {
    padding: 0;
    list-style: none;
    display: flex;
    justify-content: center;
    gap: 5px;
  }
  li {
    border: 1px solid;
    border-radius: 10px;
    padding: 7px;
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
