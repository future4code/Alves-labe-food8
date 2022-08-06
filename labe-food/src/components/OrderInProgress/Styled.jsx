import styled from "styled-components";

export const OrderCard = styled.div`
    width: 100%;
    height: 118px;
    margin: 99px 0 49px;
    padding: 24px;
    background-color: #5cb646;
    position: fixed;
    bottom: 0;
`

export const WhiteTitle = styled.h2`
    margin: 0 0 2px 24px;
    color: white;
    font-size: 16px;
    position: absolute;
    top: 24px;
    left: 80px;
`

export const BlackTitle = styled.h3`
    margin: 8px 0 8px 24px;
    color: black;
    position: absolute;
    top: 40px;
    left: 80px;
`

export const TotalPrice = styled.h3`
    margin: 8px 0 0 24px;
    font-weight: bold;
    color: black;
    position: absolute;
    top: 65px;
    left: 80px;
`
export const Clock = styled.img`
    position: absolute;
    top: 44px;
    left: 32px;
    object-fit: contain;
`