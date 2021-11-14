import styled from 'styled-components'

export const BaseboardContainer = styled.section`
  background: #000000;
  display: flex;
  justify-content: space-between;
  padding: 27px 10%;
`
export const LeftBase = styled.section`
  width: 200px;
`
export const RightContent = styled.section`
  display: flex;
  justify-content: space-around;

  image {
    width: 32px;
    height: 32px;
    border: 1px solid red;
  }
`
