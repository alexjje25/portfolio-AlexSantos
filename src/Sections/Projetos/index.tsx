import React,{ useEffect } from 'react';
import Api from '../../assets/api.png';
import gobarber from '../../assets/gobarber.png';
import git221 from '../../assets/git221.jpg';
import Aos from 'aos';
import 'aos/dist/aos.css';
import {PortfolioSection, Container, RepoContainer, InfoRepo, DetailsRepoNav, 
Button, ContentSectionPortfolio, Title} from './styles';

export const Projetos: React.FC = () => {
    useEffect(() => {
        Aos.init({ 
            duration: 2000,
            once: false,
         });
    }, []);
    
    return(
        <PortfolioSection id="portfolio">
            <Container>
            <Title>
                Projetos
                </Title>

                <ContentSectionPortfolio>
                    <RepoContainer data-aos="fade-right" isRowReverse={false}>
                        <img src={Api} />
                        <InfoRepo>
                            <h2>Utilizando Redux para Estudos</h2>
                            <p>Começei uma serie de estudos sobre o Redux/Saga fiz diversos cursos e consegui compreender e entender todo o processo do redux/saga e a sua importancia, por fim criei uma tela de Login fictícia
                            <br/>
                            <br/>
                                Linguagens Utilizadas: JS. <br/>
                                Libs: Styled-Components. </p>
                            <DetailsRepoNav>
                            <ul>
                     
                                
                            </ul>
                            <Button>
                                <a href="https://github.com/alexjje25/re-react-redux" target="_blank"  > <p>Codificação</p>  </a>
                            </Button>
                        </DetailsRepoNav>
                        </InfoRepo>
                        
                    </RepoContainer>
                    <RepoContainer data-aos="fade-bottom" isRowReverse={false}>
                        <img src={gobarber} />
                        <InfoRepo>
                            <h2>Go Barber</h2>
                            <p>
                                Neste projeto Foi Desenvolvido Algumas tela de um site para uma barbearia ficticia, foi utilizado a linguagem java script, 
                                o framework ReactJS, a biblioteca Redux-saga e styled Components
                                <br/>
                            <br/>
                                Linguagens Utilizadas: JS. <br/>
                                Libs: Styled-Components.
                                </p>
                            <DetailsRepoNav>
                            <ul>
        
                               
                            </ul>
                            <Button>
                                <a href="https://github.com/alexjje25/re-react-redux" target="_blank"  > <p>Codificação</p>  </a>
                            </Button>
                                
                        </DetailsRepoNav>
                        </InfoRepo>                    
                    </RepoContainer>
                    <RepoContainer data-aos="fade-up"  isRowReverse={false}>
                        <img src={git221} />
                        <InfoRepo>
                            <h2>Header Hamburguer</h2>
                            <p>
                               Desenvolvimento de um menu "Hamburguer" responivo Utilizando React e Styled Components.
                               <br/>
                            <br/>
                                Linguagens Utilizadas: JS. <br/>
                                Libs: Styled-Components.
                            </p>
                            <DetailsRepoNav>
                            <ul>
                              
                        
                                
                            </ul>
                            <Button>
                            <a href="https://github.com/alexjje25/Gobarber" target="_blank"> <p>Codificação</p></a>
                                </Button>
                        </DetailsRepoNav>
                        </InfoRepo>
                    </RepoContainer>
                    
        
                    
                </ContentSectionPortfolio>
            </Container>
        </PortfolioSection>
    );
}
