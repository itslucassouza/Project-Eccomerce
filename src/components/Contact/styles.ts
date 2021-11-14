import styled from 'styled-components'

export const ContactContainer = styled.section`
    height: 480px;
    background: #ee0e7d;
    color: #ffffff;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export const ContactContent = styled.div`
    max-width: 676px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const Title = styled.h1`
    margin-bottom: 32px;
    font-family: Barlow;
    font-style: normal;
    font-weight: bold;
    font-size: 32px;
    line-height: 40px;

    text-align: center;
`

export const Subtitle = styled.span`
    font-family: Barlow;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    /* identical to box height, or 150% */

    text-align: center;
`

export const Email = styled.p`
    font-family: Barlow;
    font-style: normal;
    font-weight: 500;
    font-size: 32px;
    line-height: 24px;
`
