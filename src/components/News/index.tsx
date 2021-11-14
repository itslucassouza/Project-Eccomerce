import React from 'react'
import { NewsContainer, NewsInput, NewsTitle } from './styles'

const News = () => {
    return (
        <NewsContainer>
            <NewsTitle>
                receba novidades da nossa área de produtos digitais.
            </NewsTitle>
            <NewsInput>
                <input type="email" placeholder="Digite seu e-mail" />
                <button>Cadastrar</button>
            </NewsInput>
        </NewsContainer>
    )
}

export default News
