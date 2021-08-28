import styled from 'styled-components';

export const Container = styled.div`
  padding: 8px;
  display: flex;
  flex-direction: row;
`;

export const FeatureImage = styled.div`
  img {
    max-width: 400px;
    max-height: 400px;
    min-width: 400px;
  }
`;

export const Gallery = styled.div`
  img {
    max-width: 70px;
    max-height: 70px;
    cursor: pointer;
    margin: auto;
  }

  ul {
    display: flex;
    flex-direction: column;
    list-style: none;

    li {
      display: flex;
      margin: 8px;
      border: 2px silver solid;
      padding: 8px;
      height: 70px;
      width: 70px;
      transition: ease-in-out 0.3s;

      &:hover {
        border: 2px solid #cf5711;
      }
    }
  }
`;
