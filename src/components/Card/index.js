import styled from "styled-components";

const CARD = styled.div`
  height: calc(26rem + 12vw);
  width: calc(10rem + 10vw);
  background-color: #000312);
  margin-bottom: 1rem: relative;
  margin-top: calc(1rem + 5vw);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
  
`;



const TEXT = styled.h4`
  color: var(--white);
  padding: 0 calc(1rem + 1vw);
  margin-top: 1rem;
  text-align: center;
  font-size: calc(0.6rem + 0.5vw);
  font-family: Rosario;
  margin-bottom: 3rem;
`;

const NAME = styled.h3`
  color: var(--pink);
  padding-top: 1rem;
  font-size: calc(0.5rem + 1vw);
`;

 const Card = ({ name, text, image }) => {
  const Avatar = require(`../../assets/${image}.png`).default;

  return (
    <CARD>
      <img src={Avatar}  alt=""/>
      <TEXT>{text}</TEXT>
      <NAME>{name}</NAME>
    </CARD>
  );
};

export default Card;