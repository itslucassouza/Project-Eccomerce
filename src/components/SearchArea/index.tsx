import React, { useEffect, useState } from 'react'
import { ActiveLink, SearchBar, SearchContainer, SearchOptions } from './styles'
import Router from 'next/router'
import { BsSearch } from 'react-icons/bs'

const SearchArea = () => {
  const [search, setSearch] = useState('')
  const [allProducts, setAllProducts] = useState([])

  const getProducts = async () => {
    await fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(json => setAllProducts(json))
  }

  useEffect(() => {
    getProducts()
  }, [])

  const filterSelected = allProducts?.filter(item =>
    item.title.toLowerCase().includes(search)
  )

  console.log(filterSelected, search)

  return (
    <SearchBar>
      <SearchContainer>
        <input
          placeholder="Buscar"
          value={search}
          onChange={e => setSearch(e.target.value)}
          className="search-input"
        />
        <BsSearch size={20} color={'#000'} />
      </SearchContainer>
      <SearchOptions>
        {search !== '' &&
          filterSelected?.map(name => {
            return (
              <ActiveLink
                key={name}
                onClick={() => Router.push(`/product/${name.id}`)}
              >
                {name.title}
              </ActiveLink>
            )
          })}
      </SearchOptions>
    </SearchBar>
  )
}

export default SearchArea
