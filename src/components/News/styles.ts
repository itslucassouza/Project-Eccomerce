import styled from 'styled-components'

export const NewsContainer = styled.div`
    height: 436px;
    background: #000000;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const NewsTitle = styled.div`
    max-width: 640px;
    font-family: Barlow;
    font-style: normal;
    font-weight: bold;
    font-size: 32px;
    line-height: 40px;
    /* or 125% */

    text-align: center;
    text-transform: uppercase;
`

export const NewsInput = styled.div`
    width: 600px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 24px;
    border-bottom: 1px solid #03ffa5;
    input {
        color: white;
        width: 600px;
        background: transparent;
        border: none;
    }

    input::placeholder {
        color: white;
    }

    textarea:focus,
    input:focus {
        box-shadow: 0 0 0 0;
        outline: 0;
    }

    @media screen and (max-width: 620px) {
        width: 280px;
    }

    button {
        font-family: Barlow;
        font-style: normal;
        font-weight: bold;
        font-size: 16px;
        line-height: 40px;
        cursor: pointer;

        border: none;
        background: transparent;
        color: #03ffa5;

        &:hover {
            opacity: 0.5;
        }
    }
`

export const InputContent = styled.div`
    @media screen and (max-width: 620px) {
        input {
            width: 200px;
        }
    }
`
