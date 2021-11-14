import styled from 'styled-components'

export const SearchBar = styled.main`
  display: flex;
  flex-direction: column;
  align-itemns: center;
`

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 240px;
  height: 40px;
  background: transparent;
  border: 1px solid #f2f2f2;
  border-radius: 20px;
  padding: 10px;

  @media screen and (max-width: 620px) {
    width: 100px;
    width: 90%;
    align-items: center;
    margin: 0 auto;
  }

  svg {
    margin: 03px;
  }
  input {
    padding-left: 05px;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    border: 0;
    padding: 0;
    border: none;
    border-radius: 15px;

    font-family: Barlow;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
  }

  input::placeholder {
    color: #ee0e7d;
  }

  textarea:focus,
  input:focus {
    box-shadow: 0 0 0 0;
    outline: 0;
  }
`
export const SearchOptions = styled.ul`
  max-height: 140px;
  border-radius: 8px 0px 8px 0px;
  background: #fff;
  z-index: 99999;
  overflow-y: auto;
  position: absolute;
  top: 55px;
  border-radius: 10px;
  
  }
`

export const ActiveLink = styled.li`
  color: black;
  max-width: 213px;
  cursor: pointer;
  margin: 07px 0;
  padding: 6px;

  &:hover {
    opacity: 0.7;
  }
`
