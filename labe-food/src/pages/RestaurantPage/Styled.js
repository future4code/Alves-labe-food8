import Styled from 'styled-components'

export const Container = Styled.div`
max-width:328px;
height:auto;
margin: 17px 0 12px 28px;
overflow: hidden;
display: flex;
flex-direction: column;
padding-bottom:2.5em;


`
export const RestaurantImage = Styled.img`
max-width:328px;
height:120px;
border-radius: 12px;
object-fit: cover;

`

export const Title = Styled.h1`
  font-size: 28px;
  font-weight: normal;
  font-stretch: normal;
  font-style: bold;
  line-height: normal;
  letter-spacing: -0.39px;
  color: #5cb646;
  padding-top: 1em;
  padding-bottom: 0.3em;
  
`
export const Text = Styled.p`
    font-size: 18px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39px;
  color: #777777;
  
`
export const TextContainer = Styled.div`
display:flex;

justify-content:space-between;
margin-right:40px;

`
