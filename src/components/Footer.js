import React from "react"
import styled from "styled-components"

const Footer = () => {
  return (
    <Wrapper className="">
      <a href="https://ascislowska.netlify.app">
        {" "}
        &copy; {new Date().getFullYear()} Anna Ścisłowska{" "}
      </a>
    </Wrapper>
  )
}
const Wrapper = styled.section`
  background-color: var(--onyx);
  text-align: end;
  padding-right: 2rem;
  a {
    font-size: 1rem;
    color: var(--silver-sonic);
  }
`

export default Footer
