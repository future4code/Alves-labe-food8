import React from 'react'
import Avatar from '../../assets/avatar@2x.png'
import AvatarG from '../../assets/avatar@2xgreen.png'
import Home from '../../assets/homepage@2x.png'
import HomeG from '../../assets/homepage@2xgreen.png'
import Cart from '../../assets/shopping-cart@2x.png'
import CartG from '../../assets/shopping-cart@2xgreen.png'
import { Div1 } from './Styled'
import {goToFeed, goToCart, goToProfile} from '../../routes/Coordinator'
import { useNavigate, useParams } from 'react-router-dom'

const Footer = () => {
    const navigate = useNavigate()
    const params = useParams()

  return (
    <Div1>
        <div onClick={()=>goToFeed(navigate)}><img src={HomeG}/></div>
        <div onClick={()=>goToCart(navigate)}><img src={CartG}/></div>        
        <div onClick={()=>goToProfile(navigate)}><img src={AvatarG}/></div>
    </Div1>
  )
}

export default Footer