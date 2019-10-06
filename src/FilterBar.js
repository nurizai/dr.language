import React, { useState } from 'react'
import styled from 'styled-components'
import Tag from './Tag'

export default function FilterBar() {
  const cards = require('./cards.json')

  const [popupCollapsed, setPopupCollapsed] = useState(false)
  const [popupTags, setPopupTags] = useState([])

  // Close popup whenever user clicks somewhere else in the app
  document.body.addEventListener('click', (event) => {
    event.target.dataset.filter === 'option' || setPopupCollapsed(false)
  });

  return (
    <FilterBarStyled>
      <FilterAreaStyled onClick={() => openPopup('language')}><span>Filtern nach</span>Sprache</FilterAreaStyled>
      <FilterAreaStyled onClick={() => openPopup('specialist')}><span>Filtern nach</span>Spezialist</FilterAreaStyled>
      <FilterAreaStyled onClick={() => openPopup('location')}><span>Filtern nach</span>Standort</FilterAreaStyled>
      {popupCollapsed && <Popup><Tag handleOnClick={() => handleOnClick()} key='all' tags='Alle' /><Tag handleOnClick={() => handleOnClick()} tags={popupTags} /></Popup>}
    </FilterBarStyled>
  )

  function handleOnClick() {
    console.log('yoyoyo')
    setPopupCollapsed(false)
  }

  function openPopup(filterType) {

    // Create a set with the tags displayed in the popup depending on which FilterArea is clicked
    const currentPopupTags = Array.from(cards.reduce((pre, acc) => {

      if (filterType === 'language') {
        acc.tags.forEach(tag => pre.add(tag))
      }

      if (filterType === 'specialist') {
        pre.add(acc.specialist)
      }

      if (filterType === 'location') {
        pre.add(acc.location.slice(6))
      }

      return pre
    }, new Set()))

    setPopupCollapsed(true)
    return setPopupTags(currentPopupTags)
  }

}

const FilterBarStyled = styled.main`
  position: fixed;
  top: 0;
  width: 100vw;
  text-align: center;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`

const FilterAreaStyled = styled.button`
  border: none;
  height: 48px;
  text-transform: uppercase;
  color: white;
  font-size: 12px;
  font-weight: bold;
  cursor: pointer;

  span {
    display: block;
    font-weight: normal;
    font-size: 8px;
  }

  :nth-child(1) {
    background-color: #4882BB;
  }

  :nth-child(2) {
    background-color: #316EA9;
  }

  :nth-child(3) {
    background-color: #21598F;
  }
`

const Popup = styled.div`
  padding: 10px;
  position: absolute;
  width: 100vw;
  background-color: #fffc;
  top: 48px;
  z-index: 1000;
  border-radius: 0 0 5px 5px;
`