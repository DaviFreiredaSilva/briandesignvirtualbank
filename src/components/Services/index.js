import React from 'react'
import Icon1 from '../../images/svg-1.svg'
import Icon2 from '../../images/svg-2.svg'
import Icon3 from '../../images/svg-3.svg'
import { 
        ServicesCard, 
        ServicesContainer, 
        ServicesH1, 
        ServicesIcon, 
        ServicesWrapper 
      } from './ServicesElements'

const Services = () => {
  return (
    <ServicesContainer id="services">

      <ServicesH1>Nossos serviços</ServicesH1>

      <ServicesWrapper>

        <ServicesCard>
          <ServicesIcon src={Icon1}/>
          <servicesH2>Reduza despesas</servicesH2>
          <servicesP>Te ajudamos a reduzir seus gastos e aumentar seus ganhos.</servicesP>
        </ServicesCard>

        <ServicesCard>
          <ServicesIcon src={Icon2}/>
          <servicesH2>Escritórios virtuais</servicesH2>
          <servicesP>Você pode acessar nossa plataforma a partir de qualquer lugar do mundo.</servicesP>
        </ServicesCard>

        <ServicesCard>
          <ServicesIcon src={Icon3}/>
          <servicesH2>Benefícios Premium</servicesH2>
          <servicesP>Ative nosso cartão especial para membros que devolve 5% dos gastos.</servicesP>
        </ServicesCard>

      </ServicesWrapper>
      
    </ServicesContainer>
  )
}

export default Services
