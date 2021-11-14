import React from 'react'
import {
  SolutionButton,
  SolutionsCardContainer,
  SolutionsCardFooter,
  SolutionsCardHeader,
  SolutionsCardSubtitle,
  SolutionsCardTitle
} from './styles'

interface ISolutionsCard {
  main: string
  title: string
  subtitle: string
  features?: []
}

const SolutionsCard = ({ main, title, subtitle, features }: ISolutionsCard) => {
  return (
    <SolutionsCardContainer>
      <SolutionsCardHeader>
        <p>{main}</p>
      </SolutionsCardHeader>
      <SolutionsCardTitle>{title}</SolutionsCardTitle>
      <SolutionsCardSubtitle>{subtitle}</SolutionsCardSubtitle>
      <ul>
        {/* {features?.map((feature: any, index) => {
          return (
            <>
              <li>{feature?.count}</li>
              <li>{feature?.rate}</li>
            </>
          )
        })} */}
      </ul>
      <SolutionsCardFooter>
        <SolutionButton>Ver solução</SolutionButton>
      </SolutionsCardFooter>
    </SolutionsCardContainer>
  )
}

export default SolutionsCard
