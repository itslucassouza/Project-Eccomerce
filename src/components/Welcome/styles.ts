import styled from 'styled-components'

export const WelcomeContainer = styled.div`
  padding: 0 10%;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  color: black;
`

export const WelcomeLeft = styled.div`
  height: 100%;
  width: 100%;
`

export const Title = styled.h1`
  font-family: Barlow;
  font-style: normal;
  font-weight: bold;
  font-size: 32px;
  line-height: 40px;
`

export const TextContent = styled.p`
  font-family: Barlow;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
`

export const BannerBtn = styled.button`
  margin-top: 32px;
  background: transparent;
  border: 1px solid black;
  padding: 10px;
  border-radius: 4px;
  width: 166px;
  font-family: Barlow;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
`
export const WelcomeRight = styled.div`
  height: 100%;
  width: 100%;
  padding: 64px;

  @media screen and (max-width: 600px) {
    padding: 10px;
  }
`
export const WelcomeLeftContent = styled.div`
  width: 241px;
  padding: 60px 0;

  @media screen and (max-width: 600px) {
    padding: 10px 10%;
  }
`
