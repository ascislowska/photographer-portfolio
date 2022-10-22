import React from "react"
import styled from "styled-components"

const Title = ({ title }) => {
  return (
    <Wrapper className="container">
      <h1>
        <span>#</span>
        {title}
      </h1>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  text-align: center;
  margin-bottom: 1.5rem;
  h1 {
    font-size: 5.5rem;
    mix-blend-mode: difference;
    padding-top: 1rem;

    span {
      font-size: 0.85em;
      margin-right: 1rem;
      font-weight: 700;
    }
  }
  @media screen and (max-width: 600px) {
    h1 {
      font-size: 3.5rem;
    }
  }
`
export default Title
