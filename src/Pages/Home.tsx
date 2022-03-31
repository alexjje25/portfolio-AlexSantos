//This is home page, It will contains all the sections require in this page.

//Import all the require sections here
import { Projetos } from "../Sections/Projetos";
import { HeroSection } from "../Sections/Hero";
import { About } from '../Sections/About';
import { Services } from '../Sections/Services';
import { Contact }from "../Sections/Contact";
//import { Testimonals } from "../Sections/Testimonals";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* position: relative; */
`;

const Home = () => {
  return (
    <Container>
      <HeroSection />
      <About />
      <Projetos />
      <Services />
      
      <Contact />
    </Container>
  );
};

export default Home;