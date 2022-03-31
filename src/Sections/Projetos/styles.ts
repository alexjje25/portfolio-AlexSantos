import styled, {css} from 'styled-components';



interface ContainerChangeDirection{
    isRowReverse: boolean;
}



export const PortfolioSection = styled.section`
    display: flex;
    width: 100%;
    background: #020203;
    padding: 120px 0;
    justify-content: center;

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



export const ContentSectionPortfolio = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
`;


export const RepoContainer = styled.div<ContainerChangeDirection>`
    display: flex;
    width: 100%;
    background-image: linear-gradient(to right, black,#00020f,black); 
    padding: 40px 40px;
    transition: .4s;
    border-radius: 30px;
    margin-bottom: 50px;
    
    

    
  



    &+:last-child{
        margin-bottom: 0;
    }

    @media(max-width: 734px){
        flex-direction: column;
        align-items:center;
    }
   
    img{
        height: 100%;
        width: 280px;
        border-radius: 10px;
        margin-right: 40px;
        object-fit: cover;
    }

    ${(props) => props.isRowReverse && css`
        flex-direction: row-reverse;

        img{
            margin-right: 0;
            margin-left: 40px;
        }
    `}


    &:hover{
        box-shadow: 0 0 10px 5px;

        h2{
            color: #3f404b
        }

    }

`;

export const InfoRepo = styled.div`
    display: flex;
    flex-direction: column;
    
    h2{
        font-size: 2.6rem;
        color: rgba(255,255,255,1);
        font-weight: 400;
        font-family: Arial;
        display: flex;
        justify-content: center;
        margin-bottom: 30px;
        text-align: center;
        transition: all .3s;
    }

    
    

    p{
        font-size: 1.3rem;
        color: rgba(255,255,255,.6);
        line-height: 2.3rem;
        font-weight: 500;
        font-family: Arial;
        margin-left: 10px;
        margin-bottom: auto;
    }

`;

export const DetailsRepoNav = styled.nav`
    display: flex;
    justify-content: space-between;
    font-family: Rosario;

    @media(max-width: 734px){
        margin-top: 20px;
    }

    ul{
        display: flex;
        align-items: center;

        li{
            display: flex;
            align-items: center;
            margin-right: 5px;

            img{
                width: 22px;
                margin: 0;
            }
        }
    }
`;


export const Button = styled.div`
 {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
		margin-top: 64px;
		margin-bottom: 32px;
        
        
        


		 {
			background-image: linear-gradient(to right, #616475,#000,#000);
			background-size: 300% 100%;
			transition: all 0.8s ease-in-out;
			text-transform: uppercase;
			display: inline-block;
			font-size: 1rem;
            font-family: Rosario;
            
       
			opacity: 1;
			padding: 16px 32px;
			font-weight: 700;
			line-height: 1.1;
			white-space: nowrap;
			border-radius: 3px;
			
			text-align: center;
			text-decoration: none;
			letter-spacing: 2px;
			
			@include hover-active() {
				background-position: -50% 0;
			}
		}
	}

    p{
        color: black;
        font-size: 18px;
    }
  
`;

export const Title = styled.div`
    margin-bottom: 8px;
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