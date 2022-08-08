import styled from "styled-components";

export const Div1 = styled.div`
    display: flex;
    width: 100vw;
    justify-content: center;
    align-items: center;
    flex-direction: column;
form{
    display: flex;
    flex-direction: column;
    gap: 15px;
    width: 90%;
}
input{
    padding: 10px;
    width: 100%;
    height: 100%;
    border: none;
    outline: none;
}
fieldset{
    border: 1px solid #777777;
    width: 100%;
    :active{
        border: 1px solid blue;
    }
    :focus{
        border: 1px solid blue;
    }
    :hover{
        border: 1px solid blue;
    }
    }
legend{
    margin-left: 10px;
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