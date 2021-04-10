import React, {useState} from 'react'
import { ArrowForward, ArrowRight, HeroBg, HeroBtnWrapper, HeroContainer, HeroContent, HeroH1, HeroP, VideBg } from './HeroElements'
import Video from '../../videos/video.mp4'
import { Button } from '../ButtonElement'

function HeroSection() {

  const [hover, setHover] = useState(false)

  const onHover = ()=>{
    setHover(!hover)
  }

  return (
    <HeroContainer id='home'>
      <HeroBg>
        <VideBg autoPlay loop muted src={Video} type='video/mp4'/>
      </HeroBg>
      <HeroContent>
        <HeroH1>Banco virtual fácil</HeroH1>
        <HeroP>
          Se cadastre para criar sua conta e receba 
          R$250 em créditos no seu 
          próximo pagamento.
        </HeroP>
        <HeroBtnWrapper>
          <Button 
            to="signup" 
            onMouseEnter={onHover} 
            onMouseLeave={onHover}
            primary="true"
            dark="true"
            smooth={true} 
            duration={500}
            spy={true} 
            exact='true' 
            offset={-80}
            >Inscrever-se {hover ? <ArrowForward/> : <ArrowRight/>}</Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
      
    
  )
}

export default HeroSection
