import React from "react"
import styled from "styled-components"

const Blob = ({ isActive }) => {
  return (
    <Wrapper>
      <div className="hover-area"> </div>
      <div className="blob blob-1"></div>
      <div className="blob blob-2"></div>
      <div className="blob blob-3"></div>
    </Wrapper>
  )
}
const Wrapper = styled.div`
  position: absolute;
  width: 100%;
  min-height: 100%;
  overflow: hidden;
  background-color: var(--cultured-2);
  .hover-area {
    position: absolute;
    width: 100%;
    min-height: 100vh;
    z-index: 1;
  }
  .hover-area:hover ~ .blob {
    animation-play-state: running;
  }

  .blob {
    animation-play-state: paused;

    position: absolute;
    background: rgb(131, 58, 180);
    background: linear-gradient(
      90deg,
      rgba(131, 58, 180, 1) 0%,
      rgba(253, 29, 29, 1) 50%,
      rgba(252, 176, 69, 1) 100%
    );

    border-radius: 70% 30% 70% 30% / 33% 30% 70% 67%;
  }
  .blob-1 {
    width: 10rem;
    height: 10rem;
    top: 10%;
    left: 30vw;
  }
  .blob-2 {
    top: -10%;
    left: 0%;
    height: 20rem;
    width: 25rem;
    background: linear-gradient(
      90deg,
      rgba(131, 58, 180, 0.5) 0%,
      rgba(253, 29, 29, 0.3) 50%,
      rgba(252, 176, 69, 0.2) 100%
    );
  }
  .blob-3 {
    top: 10%;
    left: 25vw;
    height: 5rem;
    width: 6rem;
    mix-blend-mode: difference;
    transform: rotate(-60deg);
  }

  /* .active { */
  .blob-1 {
    animation-duration: 30s;
    animation-iteration-count: infinite;
    animation-name: blob-1;
  }
  .blob-2 {
    animation-duration: 20s;
    animation-iteration-count: infinite;
    animation-name: blob-2;
  }
  .blob-3 {
    animation-duration: 20s;
    animation-iteration-count: infinite;
    animation-name: blob-3;
  }
  /* } */
  @keyframes blob-1 {
    from {
      top: 10%;
      left: 30vw;
      transform: rotate(0deg);
    }
    15% {
      top: 10%;
      left: 15%;
      height: 20rem;
      width: 20rem;
      transform: rotate(60deg);
    }
    35% {
      top: -30%;
      left: 0%;
      transform: rotate(-30deg);
    }
    55% {
      top: 40%;
      left: 0%;
      transform: rotate(360deg);
    }
    to {
      top: 10%;
      left: 30vw;
      transform: rotate(0deg);
    }
  }

  @keyframes blob-2 {
    from {
      height: 20rem;
      width: 25rem;
      left: 0%;
      transform: rotate(0deg);
    }
    50% {
      left: -20%;
      height: 40rem;
      width: 70vw;
      transform: rotate(-5deg);
    }
    to {
      left: 0%;
      height: 20rem;
      width: 25rem;
      transform: rotate(0deg);
    }
  }
  @keyframes blob-3 {
    from {
      top: 10%;
      left: 25vw;
      height: 5rem;
      width: 6rem;
      transform: rotate(-60deg);
    }
    50% {
      top: 20%;
      left: 0%;
      height: 10rem;
      width: 12rem;
      transform: rotate(0deg);
    }
    to {
      top: 10%;
      left: 25vw;
      height: 5rem;
      width: 6rem;
      transform: rotate(-60deg);
    }
  }
  @media screen and (max-width: 600px) {
    .blob-1 {
      left: 0%;
      top: 3rem;
    }
    .blob-2 {
      left: -10%;
      top: -40%;
    }
    .blob-3 {
      left: 0%;
      top: 10rem;
    }
    .active {
      .blob-1,
      .blob-2,
      .blob-3 {
        animation-play-state: running;
      }
    }
    .paused {
      .blob-1,
      .blob-2,
      .blob-3 {
        animation-play-state: paused;
      }
    }
  }
`

export default Blob
