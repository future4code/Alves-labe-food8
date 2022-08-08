import styled from "styled-components";

export const Div1 = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
width: 100vw;
form{
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 90%;
    gap: 15px;
}
fieldset{
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    border: 1px solid #777777;
}
input{
    width: 100%;
    height: 100%;
    padding: 12px;
}
legend{
    margin-left: 15px;
    padding: 0 5px;
}
button{
    width: 100%;
    height: 42px;
    padding: 12px 16px;
    border-radius: 5px;
    background-color: #5cb646;
    font-size: 16px;
    font-weight: bold;
}
`