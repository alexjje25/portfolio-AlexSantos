import React from 'react';
import styled, { keyframes } from "styled-components";


import rocket from "../../assets/rocket image.png";


const move = keyframes`
0% { transform: translateY(-5px)  }
    50% { transform: translateY(10px) }
    100% { transform: translateY(-5px) }
`;

const HomeSection = styled.section`
  width: 100vw;
  height: 45vw;
  background-color: #0a0b10;
  display: flex;
  justify-content: center;
  position: relative;
  @media only Screen and (max-width: 48em) {
    height: 70vw;
    display: block;
  }
  @media only Screen and (max-width: 420px) {
    height: auto;
    padding-bottom: 2rem;
  }
`;
const MainContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 70vw;
  @media only Screen and (max-width: 48em) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100vw;
  }
`;
const MobileSvg = styled.img`
  max-width: 100%;
  width: calc(% + 18vw);
  height: auto;
  z-index: 7;
  animation: ${move} 2.5s ease infinite;
  @media only Screen and (max-width: 48em) {
    align-self: flex-start;
    position: absolute;
    bottom: 5;
    width: calc(28% + 10vw);
    opacity: 0.5;
  }
  @media only Screen and (max-width: 40em) {
    display: none;
  }
`;
const Lb = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 140%;
  line-height: 1.5;
  color: var(--white);
  position: relative;
  z-index: 15;
  @media only Screen and (max-width: 48em) {
    width: 80%;
    text-align: center;
    align-items: center;
    justify-content: space-around;
    
    filter: drop-shadow(2px 4px 6px black);
  }
  @media only Screen and (max-width: 40em) {
    filter: none;
  }
`;
const Title = styled.h1`
  font-size: calc(2.2rem + 1vw);
  font-family: Arial;
   margin-bottom:100px;
  padding: 0.5rem 5;
 
`;

export const HeroSection: React.FC = () => {
  return (
    <HomeSection id="home">
      <MainContent id="home">
        <Lb id="leftBlock" >
          <Title >
            I am Alex Santos
          </Title>
        </Lb>
        <MobileSvg
          src={rocket}
          alt="Mobile Svg"
          width="340"
          height="370"
        />
      </MainContent>
    </HomeSection>
  );
};

