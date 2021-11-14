import React from 'react'
import {
    ContactContainer,
    ContactContent,
    Email,
    Subtitle,
    Title
} from './styles'

const Contact = () => {
    return (
        <ContactContainer>
            <ContactContent>
                <Title>
                    Essa loja foi construída usando uma das nossas soluções da
                    plataforma VTEX. tenha a sua.
                </Title>
                <Subtitle>Entre em contato</Subtitle>
                <Email>comercial@jussi.com.br</Email>
            </ContactContent>
        </ContactContainer>
    )
}

export default Contact
