import React, { useState } from 'react';
import { HiPlus, HiMinus } from 'react-icons/hi';
import parse from 'html-react-parser';
import ButtonMain from '../ButtonMain';
import {
  CounterButton,
  ContentWrapper,
  CounterValue,
  CounterWrapper,
  ImageWrapper,
  Text,
  Title,
  DefaultDescriptionWrapper,
  TextWrapper,
  OptionsWrapper,
  Image,
  Wrapper,
  CustomizedDescriptionWrapper,
} from './styles';

type ProductDetailsProps = {
  productImage?: string;
  altImage?: string;
};

const html = `
## Hello guys!

<p align="center">I'm graduating in Computer Science on URI - Santo Ângelo. Lately I've been following the Rocketseat way to study, wich proposes a Javascript stack: NodeJS + ReactNative and React. With this stack, it's possible to deliver a solution both for web and mobile environments. I'm working out to reach my long term goals wich are reach a level wich I could create the entire application (or to have the knowledge to achieve this) in other words, becoming a fullstack developer and finish the graduation as soon as possible to move to Canada or Australia.</p>

<br>

<div align="center">
  <img align="center" src="https://github-readme-stats.vercel.app/api/top-langs/?username=Gabao-Farias&&theme=chartreuse-dark&show_icons=true&langs_count=15" />
</div>

<br>
<br>

## Technologies already used

<div align="center">

<!-- Front-end tools -->
<a href="https://www.markdownguide.org/">
    <img src="https://img.shields.io/badge/-Markdown-000000?style=for-the-badge&labelColor=000000&logo=markdown&logoColor=white"/>
</a>
<a href="https://developer.mozilla.org/pt-BR/docs/Web/HTML">
    <img src="https://img.shields.io/badge/-HTML-E34F26?style=for-the-badge&labelColor=E34F26&logo=html5&logoColor=white"/>
</a>
<a href="https://www.w3schools.com/css/">
    <img src="https://img.shields.io/badge/-CSS-1572B6?style=for-the-badge&labelColor=1572B6&logo=css3&logoColor=white"/>
</a>
<a href="https://developer.mozilla.org/pt-BR/docs/Web/JavaScript">
    <img src="https://img.shields.io/badge/-Javascript-F7DF1E?style=for-the-badge&labelColor=F7DF1E&logo=javascript&logoColor=black"/>
</a>
<a href="https://www.typescriptlang.org/">
    <img src="https://img.shields.io/badge/-TypeScript-3178C6?style=for-the-badge&labelColor=3178C6&logo=typescript&logoColor=white"/>
</a>
<a href="https://pt-br.reactjs.org/">
    <img src="https://img.shields.io/badge/-React-61DAFB?style=for-the-badge&labelColor=61DAFB&logo=react&logoColor=black"/>
</a>

<!-- Linting and formating -->
<a href="https://eslint.org/">
    <img src="https://img.shields.io/badge/-ESLint-4B32C3?style=for-the-badge&labelColor=4B32C3&logo=eslint&logoColor=white"/>
</a>
<a href="https://prettier.io/">
    <img src="https://img.shields.io/badge/-Prettier-F7B93E?style=for-the-badge&labelColor=F7B93E&logo=prettier&logoColor=black"/>
</a>


<!-- Back-end tools -->
<a href="https://nodejs.org/en/">
    <img src="https://img.shields.io/badge/-Node-339933?style=for-the-badge&labelColor=339933&logo=node.js&logoColor=white"/>
</a>
<a href="https://www.java.com/pt-BR/">
    <img src="https://img.shields.io/badge/-Java-007396?style=for-the-badge&labelColor=007396&logo=java&logoColor=white"/>
</a>
<a href="https://www.docker.com/">
    <img src="https://img.shields.io/badge/-Docker-2496ED?style=for-the-badge&labelColor=2496ED&logo=Docker&logoColor=white"/>
</a>

<!-- Versioning Tools -->
<a href="https://git-scm.com/">
    <img src="https://img.shields.io/badge/-Git-F05032?style=for-the-badge&labelColor=F05032&logo=git&logoColor=white"/>
</a>

<!-- GitHub Services -->
<a href="https://docs.github.com/pt/actions">
    <img src="https://img.shields.io/badge/-Github%20Actions-2088FF?style=for-the-badge&labelColor=2088FF&logo=github%20actions&logoColor=white"/>
</a>

<!-- Databases -->
<a href="https://www.mongodb.com/3">
    <img src="https://img.shields.io/badge/-MongoDB-47A248?style=for-the-badge&labelColor=47A248&logo=mongodb&logoColor=white"/>
</a>
<a href="https://www.mysql.com/">
    <img src="https://img.shields.io/badge/-MySQL-4479A1?style=for-the-badge&labelColor=4479A1&logo=mysql&logoColor=white"/>
</a>
<a href="https://www.postgresql.org/">
    <img src="https://img.shields.io/badge/-PostgreSQL-336791?style=for-the-badge&labelColor=336791&logo=postgreSQL&logoColor=white"/>
</a>

<!-- Web Deploy Tools -->
<a href="https://vercel.com/">
    <img src="https://img.shields.io/badge/-Vercel-000000?style=for-the-badge&labelColor=000000&logo=vercel&logoColor=white"/>
</a>
<a href="https://www.netlify.com/">
    <img src="https://img.shields.io/badge/-Netlify-00C7B7?style=for-the-badge&labelColor=00C7B7&logo=netlify&logoColor=white"/>
</a>
<a href="https://firebase.google.com/?hl=pt-br">
    <img src="https://img.shields.io/badge/-Firebase-FFCA28?style=for-the-badge&labelColor=FFCA28&logo=firebase&logoColor=black"/>
</a>

</div>

## Contact

<div align="center">
  <a href="https://www.linkedin.com/in/gabriel-taborda-farias-26b9b8160/">
    <img src="https://img.shields.io/badge/-Gabriel Taborda Farias-0077b5?style=for-the-badge&labelColor=0077b5&logo=linkedin&logoColor=white"/>
  </a>

  <a href="mailto:gabrielfariasbass@gmail.com">
    <img src="https://img.shields.io/badge/-gabrielfariasbass@gmail.com-c14438?style=for-the-badge&labelColor=c14438&logo=gmail&logoColor=white"/>
  </a>

  <a href="https://app.rocketseat.com.br/me/gabriel-taborda-farias-1589471319">
    <img src="https://img.shields.io/badge/-Gabão-7159C1?style=for-the-badge&labelColor=7159C1&logo=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAALVBMVEVHcExxWsF0XMJzXMJxWcFsUsD///9jRrzY0u6Xh9Gsn9n39fyMecy0qd2bjNJWBT0WAAAABHRSTlMA2Do606wF2QAAAGlJREFUGJVdj1cWwCAIBLEsRU3uf9xobDH8+GZwUYi8i6ucJwrxKE+7D0G9Q4vlYqtmCSjndr4CgCgzlyFgfKfKCVO0LrPKjmiqMxGXkJwNnXskqWG+1oSM+BSwD8f29YLNjvx/OQrn+g99oQSoNmt3PgAAAABJRU5ErkJggg==" />
  </a>

  <a href="https://www.instagram.com/gabaofarias/">
    <img src="https://img.shields.io/badge/-gabaofarias-f61?style=for-the-badge&labelColor=f61&logo=instagram&logoColor=white"/>
  </a>

  <a href="https://medium.com/@gabrielfariasbass">
    <img
      src="https://img.shields.io/badge/-Gabão-191919?style=for-the-badge&labelColor=191919&logo=medium&logoColor=white"/>
  </a>
  
  <!--
  <a href="https://wa.me/5555997358826">
    <img
      src="https://img.shields.io/badge/-Gabão-25D366?style=for-the-badge&labelColor=25D366&logo=WhatsApp&logoColor=white"/>
  </a>
  -->
</div>
`;

const ProductDetails: React.FC<ProductDetailsProps> = ({
  altImage,
  productImage,
}) => {
  const [counterValue, setCounterValue] = useState(1);

  const handlePlusCounter = () => setCounterValue(counterValue + 1);

  const handleMinusCounter = () =>
    counterValue >= 2 ? setCounterValue(counterValue - 1) : counterValue;

  return (
    <Wrapper>
      <DefaultDescriptionWrapper>
        <ImageWrapper>
          <Image alt={altImage} src={productImage} />
        </ImageWrapper>
        <ContentWrapper>
          <TextWrapper>
            <Title>Nome do produto</Title>
            <Text>
              Mussum Ipsum, cacilds vidis litro abertis. Paisis, filhis,
              espiritis santis. Quem num gosta di mim que vai caçá sua turmis! A
              ordem dos tratores não altera o pão duris. Leite de capivaris,
              leite de mula manquis sem cabeça.
            </Text>
          </TextWrapper>
          <OptionsWrapper>
            <CounterWrapper>
              <CounterButton onClick={() => handleMinusCounter()}>
                <HiMinus size={25} color="#fff" />
              </CounterButton>
              <CounterValue>{counterValue}</CounterValue>
              <CounterButton onClick={() => handlePlusCounter()}>
                <HiPlus size={25} color="#fff" />
              </CounterButton>
            </CounterWrapper>
            <ButtonMain>ADICIONAR AO CARRINHO</ButtonMain>
          </OptionsWrapper>
        </ContentWrapper>
      </DefaultDescriptionWrapper>
      <CustomizedDescriptionWrapper>{parse(html)}</CustomizedDescriptionWrapper>
    </Wrapper>
  );
};

export default ProductDetails;
