import { styled } from 'styled-components';
import { BsInstagram, BsLinkedin } from "react-icons/bs";
import './Footer.css';
import logo from '../../assets/logo.png';
import { FaLinkedin, FaSquareGithub } from 'react-icons/fa6';

const StyledFooter = styled.footer`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-flow: column wrap;
    width: 100%;
    height: 100%;
    background-color: var(--color-black);
    padding: 1rem;
    box-sizing: border-box;
    border-top: 2px solid var(--color-blue);
    box-shadow: 0 -10px 15px 0 var(--color-button-shadow);
`;

const IconContainer = styled.ul`
    background-color: transparent;
    flex-wrap: wrap;
    margin: 0;
    padding: 0;
    list-style: none;
    li {
        background-color: var(--color-black);
        display: inline-block;
        padding: 5px 2px 0px 0px;
    }
`;

const LogoContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    img {
        width: clamp(30%, 100%, 10.528rem); 
        height: 20px;
        background-color: var(--color-black);
        padding: 0px 0px 2px 0px;
        transition:all .5s ease-in-out;
        filter: grayscale(100%);

        &:hover {
        cursor: pointer;
        filter: grayscale(0%);
        }
    }
`;

const FooterText = styled.p`
    background-color: transparent;
    font-size: 12px;
    color: var(--color-white-smoke);
    margin: 0;
    line-height: 1.4;
    text-align: center;
`;

function Footer() {
    return (
        <StyledFooter className='container'>
            <LogoContainer className='logo'>
                <img src={logo} alt="Logo" />
            </LogoContainer>
            <IconContainer>
                <li>
                    <a href="https://www.linkedin.com/in/eliezercatari/" target='_blank'>
                    <FaLinkedin className='icons' />
                    </a>
                </li>
                <li>
                    <a href="https://github.com/eliezercode?tab=repositories" target='_blank'>
                    <FaSquareGithub className='icons' />
                    </a>
                </li>
            </IconContainer>
            <FooterText className='text'>
                Desarrollado por Eliezer Catarí<br />
                Challenge React + Vite - Alura - Oracle ONE
            </FooterText>
        </StyledFooter>
    );
}

export default Footer