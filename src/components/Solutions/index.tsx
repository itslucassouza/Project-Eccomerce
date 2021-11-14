import React, { useEffect, useState } from 'react'
import SolutionsCard from '../SolutionsCard'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import {
  SoluctionsContainer,
  SoluctionsHeader,
  SoluctionsTitle,
  SolutionsCardContainer
} from './styles'

const Solutions = () => {
  const [prodcts, setProducts] = useState([])

  const getProducts = async () => {
    await fetch('https://fakestoreapi.com/products?limit=5')
      .then(res => res.json())
      .then(json => setProducts(json))
  }
  useEffect(() => {
    getProducts()
  }, [])

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  }

  return (
    <SoluctionsContainer>
      <SoluctionsHeader>
        <SoluctionsTitle>
          <span>//</span> Nossas soluções
        </SoluctionsTitle>
        <SolutionsCardContainer>
          <Slider {...settings}>
            {prodcts?.map((solution: any, index: any) => {
              return (
                <SolutionsCard
                  key={index}
                  main={solution.id}
                  title={solution.title}
                  subtitle={solution.description}
                />
              )
            })}
          </Slider>
        </SolutionsCardContainer>
      </SoluctionsHeader>
    </SoluctionsContainer>
  )
}

export default Solutions
