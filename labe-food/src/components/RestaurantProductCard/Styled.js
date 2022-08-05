import Styled from 'styled-components'

export const ProductImage = Styled.img`
width:96px;
height:112px;
object-fit: cover;

`
export const ContainerCard = Styled.div`
width:328px;
height:120px;
border: 1px solid #777777;
border-radius:8px;
display: flex;
margin-top:0.5em;
position: relative;

`
export const Title = Styled.h1`
font-size:16px;
color: #5cb646;
margin: 8px 49px 8px 16px;
letter-spacing: -0.39px;

`
export const ContainerText = Styled.div`
flex-direction: column;
`
export const DescriptionText = Styled.p`
font-size:12px;
margin: 8px 16px 4px;
color: #777777;

`
export const Price = Styled.h1`
font-size:16px;
color: #777777;
margin: 8px 49px 8px 16px;
letter-spacing: -0.39px;

`
export const QuantityNumber = Styled.p`
position:absolute;
top: 0;
right: 0;
width: 2em;


`
export const ContainerButton = Styled.div`
position:absolute;
bottom: 0;
right: 0;

`
export const RemoveButton = Styled.button`
border:1px solid #e02020;
color:#e02020;
background-color: none;
border-radius:8px;
`
