import React, { useState, useEffect } from 'react'
import FilterBar from './FilterBar'
import CardList from './CardList';
import styled from 'styled-components'

export default function Homepage() {

  // TODO: Set to array later in order to filter with multiple choices
  const [filter, setFilter] = useState({
    language: '',
    specialist: '',
    location: ''
  })

  useEffect(() => {
    console.log(filter)
  })

  function updateFilterOptions(key, value) {
    setFilter({
      ...filter,
      [key]: value
    })
  }

  return (
    <HomepageStyled>
      <FilterBar updateFilterOptions={(key, value) => updateFilterOptions(key, value)} />
      <CardList />
    </HomepageStyled>
  )
}

const HomepageStyled = styled.main`
  height: 100vh;
  overflow-y: scroll;
  scrollbar-width: none;
`