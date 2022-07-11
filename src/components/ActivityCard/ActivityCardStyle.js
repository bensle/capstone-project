import styled from 'styled-components';

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
export const FavDiv = styled.div`
  position: relative;
`;
export const FavButton = styled.button`
  background: none;
  border: none;
  position: absolute;
  right: -5px;
  font-size: 24px;
  color: white;
`;
export const FavButtonDelete = styled.button`
  background: none;
  border: none;
  position: absolute;
  left: -5px;
  top: -5px;
  font-size: 24px;
  color: red;
`;

export const SpanAdd = styled.span``;
export const SpanAdded = styled.span`
  color: yellow;
`;
