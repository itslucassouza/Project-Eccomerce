import React from 'react'
import Image from 'next/image'
import {
  BannerBtn,
  BannerContainer,
  BannerLeftContent,
  BannerRightContent,
  BannerSubititle,
  BannerTitle,
  ButtonCard,
  CardContent,
  CardContent2,
  CardContent3
} from './styles'

import Rectangle from '../../assets/Rectangle.png'
import Garrafa from '../../assets/garrafa.png'
import Geladeira from '../../assets/geladeira.png'

const Banner = () => {
  return (
    <BannerContainer>
      <BannerLeftContent>
        <div className="text-content">
          <BannerTitle>Criamos</BannerTitle>
          <BannerTitle>lojas que</BannerTitle>
          <BannerTitle>vendem mais.</BannerTitle>

          <BannerSubititle>
            A Jüssi é especialista na criação de lojas
          </BannerSubititle>
          <BannerSubititle>
            usando a plataforma VTEX. Precisa criar sua
          </BannerSubititle>
          <BannerSubititle>loja ou migrar de plataforma?</BannerSubititle>
          <BannerBtn>Veja nossas soluções</BannerBtn>
        </div>
      </BannerLeftContent>
      <BannerRightContent>
        <CardContent>
          <Image src={Geladeira} alt="My Image" width={129} height={134} />
          <ButtonCard>Mais Detalhes</ButtonCard>
        </CardContent>
        <CardContent2>
          <Image src={Rectangle} alt="My Image" width={129} height={134} />
          <ButtonCard>Comprar em 12x</ButtonCard>
        </CardContent2>
        <CardContent3>
          <Image src={Garrafa} alt="My Image" width={129} height={134} />
          <ButtonCard>Adicionar à sacola</ButtonCard>
        </CardContent3>
      </BannerRightContent>
    </BannerContainer>
  )
}

export default Banner
