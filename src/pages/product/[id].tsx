import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import {
  LeftContent,
  ProductContainer,
  ProductContent,
  RightContent
} from '../../styles/Product'
import { Nav } from '../../components/Nav/styles'
import Baseboard from '../../components/Baseboard'
import Navbar from '../../components/Nav'
import formatValue from '../../utils/formatValue'

const Product = () => {
  const [product, setProduct] = useState([])
  const { query } = useRouter()

  const getProducts = async () => {
    await fetch(`https://fakestoreapi.com/products/${query.id}`)
      .then(res => res.json())
      .then(json => setProduct(json))
  }

  useEffect(() => {
    getProducts()
  }, [query.id])

  return (
    <>
      <Navbar />
      <ProductContainer>
        <ProductContent>
          <LeftContent>
            <img src={product.image} alt="image" />
          </LeftContent>
          <RightContent>
            <h1>{product.title}</h1>
            <p>{formatValue(product.price)}</p>

            <div className="rate-content">
              <h2>Descrição do produto</h2>
              <p>{product.description}</p>
              <p>Avaliação</p>
              <span>{product.rating?.rate}</span>
            </div>
          </RightContent>
        </ProductContent>
      </ProductContainer>
      <Baseboard />
    </>
  )
}

export default Product
