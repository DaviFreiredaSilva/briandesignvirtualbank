import React from 'react'
import {FaFacebook, FaInstagram, FaYoutube, FaTwitter, FaLinkedin} from 'react-icons/fa'
import {animateScroll as scroll} from 'react-scroll'
import { 
        FooterContainer, 
        FooterLink, 
        FooterLinkItems, 
        FooterLinksContainer, 
        FooterLinksWrapper, 
        FooterLinkTitle, 
        FooterWrap, 
        SocialIconLink, 
        SocialIcons, 
        SocialLogo, 
        SocialMedia, 
        SocialMediaWrap, 
        WebsiteRights 
      } from './FooterElements'

const Footer = () => {

  const toggleHome = ()=> {
    scroll.scrollToTop()
  }

  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinksContainer>

          <FooterLinksWrapper>
            <FooterLinkItems>
                <FooterLinkTitle>Sobre</FooterLinkTitle>
                <FooterLink to="/signin">Como funciona</FooterLink>
                <FooterLink to="/signin">Depoimentos</FooterLink>
                <FooterLink to="/signin">Carreiras</FooterLink>
                <FooterLink to="/signin">Investidores</FooterLink>
                <FooterLink to="/signin">Termos de serviço</FooterLink>             
            </FooterLinkItems>
            <FooterLinkItems>
                <FooterLinkTitle>Entre em Contato</FooterLinkTitle>
                <FooterLink to="/signin">Contato</FooterLink>
                <FooterLink to="/signin">Suporte</FooterLink>
                <FooterLink to="/signin">Doações</FooterLink>
                <FooterLink to="/signin">Patrocinadores</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>

          <FooterLinksWrapper>
            <FooterLinkItems>
                <FooterLinkTitle>Videos</FooterLinkTitle>
                <FooterLink to="/signin">Enviar video</FooterLink>
                <FooterLink to="/signin">Embaixadores</FooterLink>
                <FooterLink to="/signin">Agenciamento</FooterLink>
                <FooterLink to="/signin">Influenciadores</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
                <FooterLinkTitle>Redes Sociais</FooterLinkTitle>
                <FooterLink to="/signin">Instagram</FooterLink>
                <FooterLink to="/signin">Facebook</FooterLink>
                <FooterLink to="/signin">Youtube</FooterLink>
                <FooterLink to="/signin">Twitter</FooterLink>
                <FooterLink to="/signin">Linkedin</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>

        </FooterLinksContainer>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to='/' onClick={toggleHome}>
              dolla
            </SocialLogo>
            <WebsiteRights>dolla © 2021
            Todos os direitos reservados
            </WebsiteRights>
            <SocialIcons>

              <SocialIconLink href="/" target="_blank"
                aria-label="Facebook">
                  <FaFacebook />
              </SocialIconLink>

              <SocialIconLink href="/" target="_blank"
                aria-label="Instagram">
                  <FaInstagram />
              </SocialIconLink>

              <SocialIconLink href="/" target="_blank"
                aria-label="Youtube">
                  <FaYoutube />
              </SocialIconLink>

              <SocialIconLink href="/" target="_blank"
                aria-label="Twitter">
                  <FaTwitter />
              </SocialIconLink>

              <SocialIconLink href="/" target="_blank"
                aria-label="Linkedin">
                  <FaLinkedin />
              </SocialIconLink>

            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  )
}

export default Footer
