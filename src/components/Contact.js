import React from "react"
import styled from "styled-components"
import Title from "./Title"

const Contact = () => {
  return (
    <Wrapper className="section" id="contact">
      <section className="section-center">
        <Title title="contact me" />
        <a href="tel://+123456789" className="call">
          <h3>123-456-789</h3>
        </a>
        <a href="mailto: mail@mail.to.me">
          <h3>mail@mail.to.me</h3>
        </a>
      </section>
    </Wrapper>
  )
}
const Wrapper = styled.section`
  a h3 {
    text-transform: lowercase;
  }
  //disable call on bigger screens
  @media (min-width: 600px) {
    .call {
      pointer-events: none;
      cursor: default;
    }
  }
`
export default Contact
