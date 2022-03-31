import React from 'react';
import Develope from '../../assets/Develope.svg';
import Ui from '../../assets/Ui.svg';


import {ContentSectionServices, Container, ServicesSection, ServiceBox, ContentBox,  ContentBoxText,  Title} from './styles';

export const Services: React.FC = () => {
    return(
        <ServicesSection id="services">
            <Container>
            <Title>
                Services
                </Title>
            <ContentSectionServices>
                <ServiceBox data-aos="fade-up" data-aos-easing="ease-in-out" >
                    <ContentBox>
                     <img src={Develope} alt="" />
                            <h1>Criação de Sites</h1>
                        <ContentBoxText>
                            <p>Desenvolvimento Front-end 
                                experiencia em ReactJs.</p>
                        </ContentBoxText>=
                    </ContentBox>    
                </ServiceBox>
                <ServiceBox data-aos="fade-up" data-aos-easing="ease-in-out" >
                    <ContentBox>
                     <img src={Ui} alt="" />
                            <h1>UI/UX</h1>
                        <ContentBoxText>
                            <p>Designer e Desenvolvimento  de prototipos, visando qualidade para os usuários.</p>
                        </ContentBoxText> 
                    </ContentBox>    
                </ServiceBox>
                
            </ContentSectionServices>
            </Container>
        </ServicesSection>
    );
}