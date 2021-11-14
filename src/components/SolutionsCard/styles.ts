import styled from 'styled-components'

export const SolutionsCardContainer = styled.div`
  width: 241px;
  height: 381px;
  padding: 16px;
  background: #ffffff;
  margin-right: 20px;

  border: 1px solid #f2f2f2;
  box-sizing: border-box;
  border-radius: 4px;

  ul {
    padding: 0 10%;

    li {
      font-family: Barlow;
      font-style: normal;
      font-weight: 500;
      font-size: 12px;
      line-height: 18px;
    }
  }
`
export const SolutionsCardHeader = styled.div`
  margin-bottom: 53px;
  p {
    display: flex;
    align-items: center;
    justify-content: center;
    background: #f2f2f2;
    width: 100px;
    height: 100px;
    border-radius: 100%;
    text-transform: uppercase;
  }
`

export const SolutionsCardTitle = styled.h1`
  overflow: hidden;
  text-overflow: ellipsis;
  max-height: 18px;
  margin-bottom: 16px;
  font-family: Barlow;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
`
export const SolutionsCardSubtitle = styled.p`
  max-height: 33px;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-bottom: 16px;
  color: #ee0e7d;
  font-family: Barlow;
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 18px;
`
export const SolutionsCardFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`
export const SolutionButton = styled.div`
  width: 209px;
  margin-top: 16px;
  height: 48px;
  background: #03ffa5;
  border-radius: 6px;
  display: flex;
  justify-content: center;
  align-items: center;
`
