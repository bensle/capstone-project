import styled from 'styled-components';

export const Section = styled.section`
  display: grid;
  justify-items: start;
  grid-template-columns: 2.3fr 1.5fr 0.2fr;
  grid-template-rows: 1fr;
  padding: 10px;
  background: var(--bgcolorcard);
  border-radius: 10px;

  ul {
    list-style: none;
    display: flex;
    gap: 5px;
    flex-wrap: wrap;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-around;
  }
`;

export const TypeSpan = styled.span`
  color: var(--iconTypecolor);
`;

export const DescriptionDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: flex-start;
  gap: 5px;
  h2 {
    font-size: 0.975rem;
    text-align: left;
  }
`;
export const ActionsDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-items: flex-end;
  gap: 5px;
`;

export const ShortLi = styled.li`
  color: var(--colorShort);
  font-size: 1.25rem;
  display: flex;
  gap: 2rem;
`;
export const MiddleLi = styled.li`
  color: var(--colorMiddle);
  font-size: 1.25rem;
  display: flex;
  gap: 2rem;
`;
export const LongLi = styled.li`
  color: var(--colorLong);
  font-size: 1.25rem;
  display: flex;
  gap: 2rem;
`;
export const InfoLi = styled.li`
  a {
    color: var(--linkcolor);
    border-radius: 5px;
    &:active {
      color: var(--linkcoloractive);
    }
    &:visited {
      color: var(--colorAll);
    }
    &:hover {
      color: var(--textcolor);
      display: block;
    }
  }
`;
export const Linkspan = styled.span`
  padding-left: 5px;
`;

export const FavButton = styled.button`
  background: none;
  border: none;
  color: white;
  cursor: pointer;
`;
export const FavButtonDelete = styled.button`
  background: none;
  border: none;
  color: var(--deleteButton);
  cursor: pointer;
`;

export const SpanAdd = styled.span`
  font-size: 1.25rem;
`;
export const SpanAdded = styled.span`
  color: var(--isFavorite);
  font-size: 1.25rem;
`;
