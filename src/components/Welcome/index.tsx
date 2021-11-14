import React from 'react'
import {
  BannerBtn,
  TextContent,
  Title,
  WelcomeContainer,
  WelcomeLeft,
  WelcomeLeftContent,
  WelcomeRight
} from './styles'
import Jussi from '../../assets/image-jussi.png'
import Image from 'next/image'

const Welcome = () => {
  return (
    <WelcomeContainer>
      <WelcomeLeft>
        <WelcomeLeftContent>
          <Title>Olá, somos </Title>
          <Title>a Jüssi</Title>

          <TextContent>
            A Jüssi é uma agência integrante do grupo global WPP que vem há 10
            anos consolidando o pensamento voltado para produtos e resolução de
            problemas. Nosso área dedicada exclusivamente para Produtos Digitais
            é organizada em 6 especialidades: Product Managamenet, User
            Experience Design, SEO, Tecnologia, Agile e User Behavior Analytics.
          </TextContent>
          <BannerBtn>Conheça a Jüssi</BannerBtn>
        </WelcomeLeftContent>
      </WelcomeLeft>
      <WelcomeRight>
        <Image src={Jussi} alt="My Image" width={676} height={520} />
      </WelcomeRight>
    </WelcomeContainer>
  )
}

export default Welcome
