import React from "react"
import { StaticImage } from "gatsby-plugin-image"

import Title from "./Title"
import styled from "styled-components"

const Hero = () => {
  return (
    <Wrapper>
      <StaticImage
        src="../images/moment2.jpg/"
        className="img"
        layout="fullWidth"
        placeholder="tracedSVG"
        alt="flying confetti"
      />
      <div className="info">
        <Title title="Moments' catcher" />
        <h2>Proffesional photographer to hire</h2>
      </div>
    </Wrapper>
  )
}
const Wrapper = styled.section`
  height: 100vh;
  position: relative;
  .img {
    height: 100%;
  }
  .info {
    position: absolute;
    top: 0;
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0.5rem;
    background-color: rgba(0, 0, 0, 0.2);
    text-align: center;

    h2 {
      color: white;
      text-shadow: var(--dark-shadow);
    }
  }
`

export default Hero
