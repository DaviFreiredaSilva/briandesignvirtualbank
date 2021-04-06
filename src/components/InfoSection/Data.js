import img1 from '../../images/svg-1.svg'
import img2 from '../../images/svg-2.svg'
import img3 from '../../images/svg-3.svg'

export const homeObjOne = {
  id: 'about',
  lightBg: false,
  lightText: true,
  lightTextDesc: true,
  topLine: 'Banco Premium',
  headLine: 'Transações ilimitadas com taxa zero',
  description: 'Tenha acesso ao nosso App exclusivo que te permite '+ 
                'realizar transações ilimitadas sem sem ser cobrado '+ 
                'por isso.',
  buttonLabel: 'Começar',
  imgStart: false,
  img: img1,
  alt: 'Money',
  dark: true,
  primary: true,
  darkText: false,
}

export const homeObjTwo = {
  id: 'discover',
  lightBg: true,
  lightText: false,
  lightTextDesc: false,
  topLine: 'Acesso Ilimitado',
  headLine: 'Entre em sua conta em qualquer momento',
  description: 'Esteja coberto não importa sua localização. '+
                'Tudo o que precisa é de uma conexão à internet.',
  buttonLabel: 'Saiba Mais',
  imgStart: false,
  img: img2,
  alt: 'Car',
  dark: false,
  primary: false,
  darkText: true,
}

export const homeObjThree = {
  id: 'signup',
  lightBg: true,
  lightText: false,
  lightTextDesc: false,
  topLine: 'Entre em nosso time',
  headLine: 'Criar uma conta é muito fácil',
  description: 'Tudo fica pronto em menos de 10 minutos. '+
                'É só inserir seus dados e estará pronto para começar.',
  buttonLabel: 'Comece agora',
  imgStart: false,
  img: img3,
  alt: 'Budge',
  dark: false,
  primary: false,
  darkText: true,
}