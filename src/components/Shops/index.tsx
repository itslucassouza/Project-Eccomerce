import React from 'react'
import { ShopsContainer, ShopsText } from './styles'
import Image from 'next/image'
import LogoBrastemp from '../../assets/logo-brastemp.png'
import LogoConsult from '../../assets/consul.png'
import Thebar from '../../assets/logo-thebar.png'
import CompraCerta from '../../assets/logo-consul.png'
import Arrow from '../../assets/arrow.png'

const Shops = () => {
    return (
        <ShopsContainer>
            <ShopsText>Nossas principais lojas VTEX →</ShopsText>
            <div className="images-content">
                <Image
                    src={LogoBrastemp}
                    alt="brastemp"
                    width={160}
                    height={26}
                />
                <Image
                    src={CompraCerta}
                    alt="compra certax'"
                    width={180}
                    height={26}
                />
                <Image
                    src={LogoConsult}
                    alt="My Image"
                    width={88}
                    height={26}
                />
                <Image src={Thebar} alt="My Image" width={130} height={26} />
            </div>
        </ShopsContainer>
    )
}

export default Shops
