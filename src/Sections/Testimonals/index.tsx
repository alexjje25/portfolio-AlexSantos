import { lazy } from "react";
import styled from "styled-components";

import Slider from "react-slick";


const Card = lazy(() => import("../../components/Card"));

const Section = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 6rem 0;
  background: #020203;

  img{
    width: 176px;
    margin-bottom: 4rem;
  }
`;

const Title = styled.h1`
  color: #fff;
  display: inline-block;
  font-size: calc(1rem + 1.5vw);
  font-family: Rosario;
  margin-top: -1rem;
  position: relative;
  &::before {
    content: "";
    height: 1px;
    width: 50%;
    position: absolute;
    left: 50%;
    bottom: 0;
    transform: translate(-50%, 0.5rem);
    /* or 100px */
    
  }
`;

const Carousal = styled.div`
  width: 60vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom:
  @media only Screen and (max-width: 40em) {
    width: 90vw;
    .slick-slider .slick-arrow {
      display: none;
    }
  }
  .slick-slider .slick-arrow:before {
    color: white;
    font-size: 1.5rem;
    @media only Screen and (max-width: 40em) {
      display: none;
    }
  }
  .slick-slider .slick-dots button:before {
    color: white;
    font-size: 1.5rem;
  }
  .slick-slide.slick-active {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: 0;
    padding: 0;
    margin-bottom: 3rem;
  }
`;

export const Testimonals = () => {
  const settings = {
    dots: true,
    infinite: true,

    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Section>
      <Title>Conhecimentos</Title>
      <Carousal>
        <Slider {...settings}>
          <Card
            text="O React é uma biblioteca JavaScript de código aberto com foco em criar interfaces de usuário em páginas web."
            name="React JS"
            image="avatar-1"
          />
          <Card
            text="O redux-saga é uma biblioteca que foca em fazer os efeitos colaterais (ex: chamadas assíncronas para buscar dados em uma API, transformações impuras como acessar o cache do navegador, etc) em aplicações React/Redux serem mais fáceis e simples de se criar e manter."
            name="Redux-Saga"
            image="avatar-2"
          />
          <Card
            text="Styled Components permitem a escrita de CSS em JavaScript usando Tagged Templates Literals."
            name="Styled-components"
            image="avatar-3"
           
          />
          <Card
            text="TypeScript é uma linguagem de programação de código aberto desenvolvida pela Microsoft. É um superconjunto sintático estrito de JavaScript e adiciona tipagem estática opcional à linguagem."
            name="Typescript"
            image="avatar-4"
          />
        </Slider>
      </Carousal>
    </Section>
  );
};

