import {MdOutlineBookmarkAdd} from 'react-icons/md';
import styled from 'styled-components';

export default function Favorite(props) {
  return (
    <Section>
      <FavDiv>
        <FavButton onClick={() => props.onAddFavorite(props.id)}>
          <MdOutlineBookmarkAdd />
        </FavButton>
      </FavDiv>
      <h2>{props.name}</h2>
      <h3>{props.location}</h3>
      {/* eslint-disable-next-line */}
      <ul role="list">
        {props.duration === 'short' ? (
          <li>Day trip</li>
        ) : props.duration === 'weekend' ? (
          <li>Weekend Trip</li>
        ) : (
          <li>3 Days +</li>
        )}
        <li>{props.type}</li>
      </ul>
      <a href={props.infos}>Find out more</a>
    </Section>
  );
}

const FavDiv = styled.div`
  position: relative;
`;
const FavButton = styled.button`
  background: none;
  border: none;
  position: absolute;
  top: 0;
  right: 0;
  font-size: 28px;
  color: white;
`;

const Section = styled.section`
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
