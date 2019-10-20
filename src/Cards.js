import React, { useState } from 'react'
import styled from 'styled-components'
import Tag from './Tag'
import email from './icons/email.svg'
import phone from './icons/phone.svg'
import {Star} from 'styled-icons/boxicons-solid/Star'

export default function Cards({
  name,
  specialist,
  address,
  tags,
  photo,
  location,
  onBookmarkClick,
  isBookmarked,
  emailAddress,
  phoneNumber
}) {
  const [collapsed, setCollapsed] = useState(false)

  function toggleCollapsed() {
    setCollapsed(!collapsed)
  }

  function renderDetails() {
    return (
      <>
        <address>{address}</address>
        <address>{location}</address>
      </>
    )
  }

  function handleBookmarkClick(event) {
    event.stopPropagation()
    onBookmarkClick()
  }

  return (
    <FullCardStyled>
      <BookmarkStyled onClick={(event) => handleBookmarkClick(event)} active={isBookmarked}/>
      <img src={photo} alt="Doctor" />
      <hr/>
      <CardStyled>
        <h2>{name}</h2>
        <h4>{specialist}</h4>
        {renderTags()}
        <hr/>
        <pre onClick={() => toggleCollapsed()}>&#9432;</pre>
        {collapsed && renderDetails()}
      </CardStyled>
      <CardButton>
        <CardButtonLeftStyled href={"mailto:" + emailAddress}><img src={email} alt="Email" /></CardButtonLeftStyled>
        <CardButtonRightStyled href={"tel:" + phoneNumber}><img src={phone} alt="Phone" /></CardButtonRightStyled>
      </CardButton>
    </FullCardStyled>
  )

  function renderTags() {
    return (
      <div>
        {<Tag tags={tags} />}
      </div>
    )
  }
}

const BookmarkStyled = styled(Star)`
  width: 24px;
  height: 24px;
  position: absolute;
  right: 2px;
  top: 2px;
  color: ${props => (props.active ? '#f7a80b': '#83909f')};
`
const CardStyled = styled.div`
  background: white;
  text-align: center;

  > h2 {
      font-family: 'Fira Sans';
      margin: 0;
      color: #83909f;
      display: block;
      font-size: 17px;
      font-weight: normal;
    }

    > h4 {
      font-family: 'Fira Sans';
      color: #83909f;
      line-height: 1.1;
      font-size: 14px;
      font-weight: 300;
      margin: 5px 0;
    }

  > address {
    margin: 7px 0;
    font-size: 13px;
    color: #83909f;
    font-weight: 300;
  }

  > pre {
    display: block;
    margin: 5px auto;
    width: 15px;
    color: #4882bb;
    font-size: 17px;
    font-weight: 700;
    cursor: pointer;
  }
`
const CardButton = styled.div`
  display: inline;
`

const CardButtonLeftStyled = styled.a`
  box-sizing: border-box;
  display: inline-block;
  width: 50%;
  height: 40px;
  background: #83909f;
  border-radius: 0 0 0 8px;
  border: 0 solid #83909f;
  cursor: pointer;
  text-align: center;
  padding-top: 8px;
`

const CardButtonRightStyled = styled.a`
  box-sizing: border-box;
  display: inline-block;
  width: 50%;
  height: 40px;
  background: #9fcacb;
  border-radius: 0 0 8px 0;
  border: 0 solid #9fcacb;
  cursor: pointer;
  text-align: center;
  padding-top: 8px;
`

const FullCardStyled = styled.section`
  display: grid;
  grid-template-rows: repeat(4, auto);
  height: auto;
  width: auto;
  position: relative;
  box-sizing: border-box;
  background-color: white;
  margin: 20px;
  box-shadow: 0 1px 2px 0 rgba(0,0,0,0.2);
  border-radius: 8px;

  > img {
    display: block;
    margin: 8px auto 0 auto;
    height: 125px;
    width: 125px;
    object-fit: cover;
    border-radius: 50%;
    box-shadow: 0 0px 2px 0 rgba(0,0,0,0.5);
  }

  hr {
    width: 90%;
    border: 0;
    height: 1px;
    background-image: linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0));
  }
`
