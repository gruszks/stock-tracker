import styled from 'styled-components/macro';

export const Header = styled.header`
  max-width: 1000px;
  background-color: #f2f2f2;
  display: grid;
  padding: 15px;
  grid-template-columns: auto 1fr;
  align-items: center;
  grid-column-gap: 35px;
  border-bottom: 1px solid #ccc;

  @media screen and (min-width: 1024px) {
    margin: 10px auto 0;
    border: 1px solid #ccc;
    border-radius: 3px;
  }
`;

export const Logo = styled.h1`
  font-size: 20px;

  a {
    color: #666666;

    &:hover {
      color: inherit;
    }
  }
`;

export const Menu = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;

  li:not(:last-child) {
    margin-right: 15px;
  }

  a.active {
    color: #000;
    font-weight: bold;
  }
`;
