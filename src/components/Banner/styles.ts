import styled from 'styled-components'

export const BannerContainer = styled.div`
  background: #03ffa5;
  color: black;
  height: 560px;
  display: flex;

  @media screen and (max-width: 730px) {
    flex-direction: column;
    align-items: center;
  }
`

export const BannerLeftContent = styled.div`
  text-align: left;
  display: flex;
  padding: 20px;

  flex-direction: column;
  width: 50%;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 600px) {
    padding: 10px;
  }
  .text-content {
    display: flex;
    flex-direction: column;
    align-items: left;
  }
`
export const BannerRightContent = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  padding: 20px;

  @media screen and (max-width: 730px) {
    display: none;
  }
`
export const BannerTitle = styled.p`
  font-family: Barlow;
  font-style: normal;
  font-weight: 500;
  font-size: 64px;
  line-height: 77px;
  text-transform: uppercase;
`

export const BannerSubititle = styled.p`
  max-width: 390px;
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

export const CardContent = styled.div`
  z-index: 1;
  display: flex;
  position: relative;
  top: 30%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 209px;
  height: 271px;
  background: #ffffff;
`

export const CardContent2 = styled.div`
  z-index: 2;
  display: flex;
  position: relative;
  right: 13.5%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 209px;
  height: 271px;
  background: #ffffff;
  box-shadow: 0px 32px 32px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
`

export const CardContent3 = styled.div`
  display: flex;
  z-index: 1;
  position: relative;
  top: 40%;
  right: 27%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 209px;
  height: 271px;
  background: #ffffff;
  box-shadow: 0px 32px 32px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
`

export const ButtonCard = styled.button`
  margin-top: 34px;
  background: transparent;
  border: 1px solid #ee0e7d;
  color: #ee0e7d;
  border-radius: 100px;
  padding: 14px;
  box-shadow: 0px 32px 32px rgba(0, 0, 0, 0.25);
`
