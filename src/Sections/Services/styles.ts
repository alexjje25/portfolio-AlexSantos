import styled from 'styled-components';





export const ServicesSection = styled.section`
    display: flex;
    width: 100%;
    flex-direction: column;
    background: #0F0F0F;
    padding: 103px 0;
    align-items: center;

    &:hover{
        
        h1:first-child{
            -webkit-text-stroke: 1px;
            -webkit-text-stroke-color: #666;
            color: #161617;
            transition: all .3s;
        }
        
    }
`;

export const Container = styled.div`
    width: 90%;
    max-width: 1140px;
`;


export const ContentSectionServices = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
   
    

    @media(max-width: 858px){
        flex-wrap: wrap;
        justify-content: center;
        margin-top: -39px;
        margin: 5;
        
        
    }

`;


export const ServiceBox = styled.div`
 
    width: 310px;
    height: 350px;
    background-image: linear-gradient(to right, #00020f,#00020f,black);
    
    justify-content: center;
    padding: 50px 10px 20px 20px;
    border-radius: 10px;
    box-shadow: 5px 5px 20px;
    margin:  0 150px;
    
    
   
    @media(max-width: 858px){
        margin-bottom: 40px;
        
        
        &:last-child{
            margin-bottom: 0;
        }
    }

`;

export const ContentBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

   h1{
        margin: 45px 0 50px;
        color: rgba(255, 255, 255, 1);
        font-weight: 500;
        font-family: Rosario;
        font-size: 1.3rem;
        margin-bottom: 29px;
    }
    img{ 
        width: 80px;
        margin-top: -32px ;
        margin-bottom: -18px;
    }

`;



    






export const ContentBoxText = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    

    p{
        font-size: 1.2rem;
        color: rgba(255,255,255,.6);
        line-height: 1.6rem;
        font-weight: 500;
        font-family: Rosario;
        margin-left: 2px;
    }

`;

export const Title = styled.div`
    margin-bottom: 2px;
    text-align: center;
    color: white;
   
    
    
font-size:30px; font-weight:700; font-family: Rosario; letter-spacing:1px; text-transform:uppercase; width:160px; text-align:center; margin:auto; white-space:nowrap; padding-bottom:100px;

:before {
    background-color: #c50000;
    content: '';
    display: block;
    height: 3px;
    width: 98px;
    margin-bottom: -5vh;
    
}

`;