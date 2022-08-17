import styled from "styled-components";

export const Div1 = styled.div`
    display: flex;
    width: 100%;
    max-width: 100vw;
    height: fit-content;
    min-height: 100vh;
    flex-direction: column;
    align-items: center;
`
export const Div2 = styled.div`
    display: flex;
    width: 100%;
    padding: 4%;
    flex-direction: column;
    align-items:flex-start;
    gap: 4px;
p{
    font-size: 1.15rem;
}
img{
    position: absolute;
    left: 90%;
    cursor: pointer;
}
`
export const Div3 = styled.div`
    display: flex;
    width: 100%;
    padding: 4%;
    flex-direction: column;
    background-color: #eeeeee;
    gap: 6px;
h3{
    color: #b8b8b8;
    font-size: 1rem;
    font-weight: normal;
}
img{
    position: absolute;
    left: 90%;
    cursor: pointer;

}
`
export const Div4 = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    padding: 4%;
    gap: 6px;
hr{
    background-color: black;
    height: 1px;
    border: none;
}
`
export const DivOrderCard = styled.div`
    display: flex;
    flex-direction: column;
    border: 1px solid gray;
    border-radius: 5px;
    padding: 4%;
    gap: 7px;
h4{
    color: #5cb646;
    font-weight: normal;
}
`