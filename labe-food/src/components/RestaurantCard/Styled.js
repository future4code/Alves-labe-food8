import styled from 'styled-components'

export const RestaurantCardStyle = styled.div`
  display: flex;
  flex-direction: column;
  width: 340px;
  height: 200px;
  border: 1px solid lightgray;
  border-radius: 8px;
  overflow: hidden;
  div {
    height: 68%;
    align-items: center;
    justify-content: center;
    img {
      width: 100%;
      max-height: 100%;
      object-fit: fill;
    }
  }
  h2 {
    font-size: 16px;
    color: #5cb646;
    font-weight: normal;
    margin: 3% 4% 1% 4%;
  }
  h4 {
    color: #777777;
    font-size: 16px;
    font-weight: normal;
  }
  section {
    display: flex;
    justify-content: space-between;
    margin: 0 4%;
  }
`
