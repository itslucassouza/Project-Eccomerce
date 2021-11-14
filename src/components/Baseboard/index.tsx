import React from 'react'
import { BaseboardContainer, LeftBase, RightContent } from './styles'
import Image from 'next/image'
import Wpp from '../../assets/wppcompany.png'
import Face from '../../assets/facebook.png'
import Insta from '../../assets/instagram.png'
import Linke from '../../assets/linkedin.png'

const Baseboard: React.FC = () => {
    return (
        <BaseboardContainer>
            <LeftBase>
                <Image src={Wpp} alt="My Image" width={142} height={27} />
            </LeftBase>
            <RightContent>
                <Image src={Face} alt="facebook" />
                <Image src={Insta} alt="instagram" />
                <Image src={Linke} alt="linkedin" />
            </RightContent>
        </BaseboardContainer>
    )
}

export default Baseboard
