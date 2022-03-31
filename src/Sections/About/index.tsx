import styled, { keyframes } from "styled-components";
import wave from "../../assets/waves.svg";
import perfil1 from "../../assets/perfil1.png";
import human from "../../assets/human.svg";




const move = keyframes`
0% { transform: translateY(-5px)         }
    50% { transform: translateY(10px) translateX(10px)        }
    100% { transform: translateY(-5px)         }
`;

const AboutSection = styled.section`
  width: 100vw;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Waves = styled.img`
  width: 100%;
  height: auto;
  position: absolute;
  top: -1rem;
`;


const Main = styled.div`
  margin: 0 15rem;
  margin-top: 23rem;
  display: flex;
  justify-content: center;
  flex-direction: column;
  @media only Screen and (max-width: 64em) {
    margin: 0 calc(5rem + 5vw);
    margin-top: 10rem;
  }
  @media only Screen and (max-width: 40em) {
    align-items: center;
    margin: 3rem calc(3rem + 3vw);
  }
`;

const Title = styled.h1`
  font-size: 28px;
  display: inline-block;
  margin-top: 3px;
  margin-left: 240px;
  font-family: Rosario;
  margin-bottom: 33px;
 ;
`;



const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media only Screen and (max-width: 40em) {
    flex-direction: column;
  }
`;

const Rocket = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  width: 30%;
  padding-bottom: 5rem;
  animation: ${move} 2.5s ease infinite;
  @media only Screen and (max-width: 40em) {
    width: 40vw;
    padding-bottom: 0;
  }
  img{
    width: 140px;
    margin-left: 100px;
    
  }
`;

const Human = styled.div`
  width: 46%;
  position: absolute;
  right: 0;
  bottom: 100%;

  @media only Screen and (max-width: 40em) {
    display: none;
  }
`;
const Text = styled.h4`
  font-size: calc(0.5rem + 1vw);
  line-height: 1.5;
  color: var(--nav2);
  font-Family:Rosario;
  margin-top:3vh;
`;
const Circle = styled.span`
  display: inline-block;
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  background-color: black;
  margin-right: 0.5rem;
  margin-top: 2rem;
`;
const AboutText = styled.div`
  width: 50%;
  position: relative;
  @media only Screen and (max-width: 40em) {
    width: 100%;
  }
`;

export const About = () => {
  return (
    <AboutSection id="about">
      <Waves src={wave} alt="" />
      
      <Main>
        <div>
          
          <Title>Sobre</Title>
          
        </div>
        <Content>
          <Rocket>
            <img src={perfil1} alt="" width="" height="" />
          </Rocket>
          <AboutText>
            <Human>
              <img src={human} alt="" width="400" height="400" />
            </Human>
            
            <Text>
               Meu nome é Alex, Atuo como Desenvolvedor Front-End, Desde muito novo sou apaixonado 
               por tecnologia, gosto muito de provocar transformação positiva e superar desafios.
            </Text>
          
            <div>
              <Circle style={{ backgroundColor: "var(--purple)" }} />
              <Circle style={{ backgroundColor: "var(--pink)" }} />
              <Circle style={{ backgroundColor: "var(--black)" }} />
            </div>
          </AboutText>
        </Content>
      </Main>
    </AboutSection>
  );
};

