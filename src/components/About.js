import React from "react"
import styled from "styled-components"
import Title from "./Title"
import Blob from "./Blob"
const About = () => {
  return (
    <Wrapper>
      <Blob />

      <div className="section-center">
        <Title title="about" />
        <div className="info">
          <p>
            Photography fit selvage hell of, tumeric swag pour-over iPhone
            keffiyeh big mood knausgaard. Same cardigan ascot typewriter. Fam
            pour-over 8-bit four dollar toast lumbersexual ethical marfa. 90's
            big mood four loko, lyft master cleanse YOLO pok pok direct trade
            gatekeep street art gentrify hashtag venmo pinterest.
          </p>
          <p>
            Photography jean shorts vexillologist four dollar toast. Kogi art
            party infolk la croix put a bird on it fit. Hell of readymade cloud
            bread, sustainable asymmetrical kinfolk prism microdosing helvetica
            bushwick. Helvetica chartreuse snackwave poke selvage XOXO pork
            belly. Swag subway tile polaroid, flexitarian cornhole shaman mlkshk
            DIY beard chambray bitters drinking vinegar fixie jianbing. Next
            level try-hard chartreuse, shaman aesthetic sustainable lomo four
            loko meh affogato butcher scenester narwhal gentrify tilde.
          </p>
        </div>
      </div>
    </Wrapper>
  )
}
const Wrapper = styled.section`
  position: relative;
  min-height: 100vh;
  .section-center {
    height: 100%;
    justify-content: center;
  }
  .info {
    border-radius: var(--radius);
    width: 75vw;
    background-color: white;
    opacity: 0.9;
    padding: 1.5rem;
    margin: 1.5rem;
  }
  @media screen and (max-width: 600px) {
    .info {
      width: 100%;
    }
  }
`
export default About
