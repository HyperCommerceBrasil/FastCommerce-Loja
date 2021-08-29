import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;

  @media (max-width: 900px) {
    flex-direction: column-reverse;
  }
`;

export const FeatureImage = styled.div`
  img {
    width: 100%;
    height: 100%;
    max-width: 250px;
    max-height: 250px;
    min-width: 400px;

    @media (max-width: 900px) {
      margin-bottom: 16px;
    }
  }
`;

export const Gallery = styled.div`
  width: 100%;
  max-width: 200px;
  img {
    max-width: 50px;
    max-height: 50px;
    cursor: pointer;
    margin: auto;
  }

  ul {
    display: flex;
    flex-direction: column;
    list-style: none;

    @media (max-width: 900px) {
      flex-direction: row;
      margin-left: auto;
    }

    li {
      display: flex;
      margin: 8px;
      border: 2px silver solid;
      padding: 8px;
      height: 60px;
      width: 60px;
      transition: ease-in-out 0.3s;

      @media (max-width: 350px) {
        height: 40px;
        width: 40px;
      }

      &:hover {
        border: 2px solid #cf5711;
      }
    }
  }
`;
