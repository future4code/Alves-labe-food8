import { Flex, Image } from '@chakra-ui/react'
import React from 'react'
import Logo from '../../assets/logo-branco-3.png'
import { useNavigate } from 'react-router-dom'
import {goToFeed} from '../../routes/Coordinator'
import { useEffect } from 'react'

const SplashPage = () => {
  const navigate = useNavigate()

  useEffect(()=>{
    setTimeout(() => {goToFeed(navigate)}, 2500)
  },[])    

  return (
    <Flex
    w={'100vw'}
    minH={'100vh'}
    bg={'black'}
    justify={'center'}
    align={'center'}
    >
      <Image src={Logo} w={'50%'} h={'50%'}/>
    </Flex>
  )
}

export default SplashPage