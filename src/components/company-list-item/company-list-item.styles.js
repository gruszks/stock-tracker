import styled from 'styled-components/macro';

export const Image = styled.img`
  grid-area: picture;
  display: block;
`;

export const NoImage = styled.div`
  grid-area: picture;
  background-color: #f2f2f2;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 10px;
`;

export const Name = styled.h3`
  display: inline-block;
  font-weight: bold;
  font-size: 18px;
  margin-right: 5px;
`;

export const Content = styled.div`
  display: grid;
  grid-row-gap: 5px;
`;

export const Delete = styled.button`
  background: none;
  border: 0;
  user-select: none;
  outline: none;
  padding: 0;
  margin: 0;
  cursor: pointer;
  display: none;
`;

export const State = styled.span`
  margin-right: 0;

  ${({ state }) => state === 'up' && `color: #00CC00`};
  ${({ state }) => state === 'down' && `color: #FF0000`};
`;

export const Item = styled.li`
  display: grid;
  grid-template-columns: 64px 1fr auto;
  grid-template-areas: 'picture content delete';
  grid-column-gap: 15px;
  height: 64px;
  min-height: 64px;
  align-items: center;

  span {
    display: inline-flex;
    align-items: center;
    margin-right: 5px;

    img {
      margin-left: 5px;
    }
  }

  &:hover ${Delete} {
    display: block;
  }
`;
