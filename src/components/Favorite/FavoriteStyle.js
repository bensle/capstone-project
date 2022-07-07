import styled from 'styled-components';

export const FavDiv = styled.div`
  position: relative;
`;
export const FavButton = styled.button`
  background: none;
  border: none;
  position: absolute;
  top: 0;
  right: 0;
  font-size: 28px;
  color: red;
`;

export const Section = styled.section`
  border: 1px solid;
  border-radius: 5px;
  padding: 5px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  gap: 5px;

  h2 {
    font-size: 1.2rem;
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
