import styled from 'styled-components'

export const ProductContainer = styled.section`
  @media (max-width: 700px) {
    display: flex;
    flex-direction: column;
    padding: 20px;
    width: 100%;
  }
`

export const ProductContent = styled.div`
  display: flex;
  color: black;
  padding: 20px;
  justify-content: center;

  @media (max-width: 700px) {
    flex-direction: column;
  }
`
export const LeftContent = styled.div`
  width: 50%;

  img {
    margin: 20px;
    height: 428px;
    width: 378px;
  }

  @media (max-width: 600px) {
    img {
      width: 200px;
      height: 200px;
    }
  }
`

export const DescriptionContent = styled.main`
  color: black;
  padding: 0 20px;
  max-width: 100%;

  @media (max-width: 700px) {
    width: 800px;
    display: flex;
    flex-direction: column;
  }
  h2 {
    font-size: 24px;
    font-weight: 400;
    padding-bottom: 24px;
  }

  p {
    color: #666;
    font-size: 20px;
    font-weight: 400;
    font-size: 16px;
    word-break: break-word;
  }
`
export const RightContent = styled.div`
  max-width: 300px;
  display: flex;
  flex-direction: column;
  padding-top: 80px;

  p {
    padding-bottom: 20px;
  }

  .rate-content {
    p {
      padding-top: 20px;
    }

    span {
      color: rgba(0, 0, 0, 0.55);
    }
  }

  p {
    padding-top: 30px;
  }
`
