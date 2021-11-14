import styled from 'styled-components'

export const ShopsContainer = styled.div`
  background: #f2f2f2;
  color: black;
  padding: 0 10%;
  height: 80px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  .images-content {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
  }

  @media (max-width: 700px) {
    align-items: center;
    display: flex;
    justify-content: center;
    .images-content {
      display: flex;
      align-items: center;
      justify-content: space-around;
      width: 340px;
      img {
        height: 12px;
        border: 1px solid red;
      }
    }
    flex-direction: column;
  }
`
export const ShopsText = styled.p`
  width: 400px;
  font-family: Barlow;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;

  @media (max-width: 700px) {
    width: auto;
    align-items: center;
    display: flex;
    justify-content: center;
  }
`
