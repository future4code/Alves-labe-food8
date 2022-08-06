import React from 'react'
import Back from '../../assets/back.png'
import { HeaderDiv, Title, BackVector } from './Styled'
import { goBack } from '../../routes/Coordinator'
import { useNavigate } from 'react-router-dom'

export default function Header(props) {
  const navigate = useNavigate()

  return (
    <HeaderDiv>
      <BackVector
        src={Back}
        alt="Botão de voltar"
        onClick={() => goBack(navigate)}
      />
      <Title>{props.title}</Title>
    </HeaderDiv>
  )
}
