import {useState} from 'react';
import Facebook from "../../assets/git22.png";
import LinkedId from "../../assets/linkedin-brands.svg";
import emailjs from "emailjs-com";
import styled from "styled-components";


const ContactSection = styled.section`
  width: 100vw;
  padding: calc(2.5rem + 2.5vw) 0;
  background-color: #020203;
  display: flex;
  flex-direction: column;
  
  /* justify-content: center; */
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
  color: var(--white);
  display: inline-block;
  font-size: 2rem;
  margin-bottom: 3rem;
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
    border-bottom: 2px solid var(--pink);
  }
`


const Icons = styled.div`
  display: flex;
  margin-bottom: 2rem;
  a {
    &:hover {
      img {
        filter: invert(20%) sepia(100%) saturate(500%) hue-rotate(580deg)
          brightness(100%) contrast(97%);
      }
    }
    &:not(:last-child) {
      margin-right: 2rem;
    }
    img {
      width: 3rem;
      height: 3rem;
    }
  }
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
 
  input {
    padding: 1rem calc(0.2rem + 1vw);
    
    background-color: var(--nav2);
    border: none;
    
    
    color: #eff7f8;
    &:active,
    &:focus {
      border: none;
      outline: none;
      background-color: var(--nav);
    }
    &::placeholder {
      color: #eff7f8;
      opacity: 0.6;
    }
    &[name="name"] {
      margin-right: 2rem;
    }
  }
  textarea {
    padding: 1rem calc(0.5rem + 1vw);
    margin-bottom: 1rem;
    background-color: var(--nav2);
    border: none;
    border-radius: 4px;
    color: #eff7f8;
    margin-bottom: 2rem;
    &:focus,
    &:active {
      background-color: var(--nav);
    }
    &::placeholder {
      color: #eff7f8;
      opacity: 0.6;
    }
  }
  button {
    padding: 0.8rem 2rem;
    background-color: var(--white);
    border-radius: 20px;
    font-size: 1.2rem;
    font-family: Rosario;
    margin-bottom: 7px;
    color: #0a0b10;
    cursor: pointer;
    transition: transform 0.3s;
    &:hover {
      transform: scale(1.1);
    }
    &:active {
      transform: scale(0.9);
    }
  }
`;
const MESP = styled.p`
  color: white;
  font-family: Rosario;
  flex-direction: column;
  text-align: center;

  
  

`;

const Result = () => {
  return (
    <MESP>Mensagem enviada com sucesso! Muito Obrigado 😀 </MESP>
  )
}


export function Contact(props){
  const [result, showResult] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('GmailMessage', 'template_wdv4xsw', e.target, 
    'user_HGlN8QpuQpRIDGfV5iHJe')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
      showResult(true);

  };
  return (

    <ContactSection id="contact">
      <Title>Entre em Contato Comigo! </Title>
    
      <Icons>
        <a href="https://github.com/alexjje25/">
          {" "}
          <img src={Facebook} alt="Facebook" />
        </a>
        <a href="https://www.linkedin.com/in/alex-santos-54b470164/">
          <img src={LinkedId} alt="LinkedId" />
        </a>
        </Icons>

          <Form onSubmit={sendEmail}>
            <div class="">
            
            
              <br />
              <input type="text" placeholder='Digite seu nome' name="name" required />
              <br />
            
              <br />
              <input type="text" name="phone" placeholder='Digite seu telefone' required />
              <br />
              
              <br />
              <input type="text" name="email" placeholder='Digite seu e-mail'required />
              <br />
            </div>
            <div class="">
              
              <br />
              <textarea name="message" placeholder='Digite sua mensagem'required></textarea>
              <br />
              <button>Enviar</button>

              <div className=''>{result ? <Result /> : null}</div>
            </div>
          </Form>
          </ContactSection>
  );
};
