import React from 'react'
import { LinkWrap, Cover, Contain } from './Links.style'
import jewsons from '../images/jewsons.jpeg'
import notts from '../images/notts.jpg'
import rgb from '../images/rgb.jfif'
import travis from '../images/TravisPerkins.jpg'

function Links() {
  return (
    <LinkWrap>
      <Cover src={jewsons} alt="" />
      <Contain src={notts} alt="" />
      <Cover src={rgb} alt="" />
      <Cover src={travis} alt="" />
    </LinkWrap>
  )
}

export default Links
