import React, { useState } from "react"
import styled from "styled-components"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import { FiArrowRightCircle, FiArrowLeftCircle, FiX } from "react-icons/fi"

const Carousel = ({ images }) => {
  const [activeImage, setActiveImage] = useState(0)
  const [slideDirection, setSlideDirection] = useState("")
  const slide = change => {
    //set slide direction
    if (change === 1) {
      setSlideDirection("next")
    } else if (change === -1) {
      setSlideDirection("prev")
    }
    //change photo
    //prev from 1st to last
    if (activeImage === 0 && change === -1) {
      setActiveImage(images.length - 1)
    } else {
      //from last to 1st
      if (activeImage === images.length - 1 && change === 1) {
        setActiveImage(0)
      } else if (0 < activeImage < images.length - 1) {
        //normal scroll
        setActiveImage(activeImage + change)
      }
    }
  }
  //mouse scroll
  const scroll = e => {
    if (e.deltaY > 0) {
      slide(1)
    } else if (e.deltaY < 0) {
      slide(-1)
    }
  }
  return (
    <Wrapper>
      {/* close */}
      <Link to="/#galleries" className="close-btn">
        <FiX />
      </Link>
      <div
        className="main"
        onWheel={e => {
          scroll(e)
        }}
      >
        {/* next photo */}
        <div className="btn-container prev">
          <button className="slide prev" onClick={() => slide(-1)}>
            <FiArrowLeftCircle />
          </button>
        </div>
        {/* main photo */}
        <GatsbyImage
          key={activeImage}
          image={getImage(images[activeImage])}
          className={`${slideDirection} photo`}
          objectFit="contain"
          alt=""
        />
        {/* previous photo */}
        <div className="btn-container next">
          <button className="slide next" onClick={() => slide(1)}>
            <FiArrowRightCircle />
          </button>
        </div>
      </div>
      {/* SLIDER */}
      <div className="photos-slider">
        {images.map((image, index) => {
          return (
            <button
              key={index}
              id={index}
              className={
                activeImage === index
                  ? "image-container active"
                  : "image-container"
              }
              onClick={() => {
                setActiveImage(index)
                setSlideDirection("")
              }}
            >
              <GatsbyImage
                image={getImage(image)}
                objectFit="cover"
                className="photo"
                alt=""
              />
            </button>
          )
        })}
      </div>
    </Wrapper>
  )
}
const Wrapper = styled.div`
  background-color: var(--eerie-black);
  display: flex;
  flex-direction: column;
  justify-content: end;
  gap: 2rem;
  height: 100vh;
  width: 100vw;
  //main photo
  .main {
    height: 80vh;
    width: 100%;
    position: relative;
    display: flex;
    justify-content: center;
    padding-top: 1rem;
    overflow: hidden;
    .photo.next {
      animation-name: next;
      animation-duration: 0.5s;
      animation-iteration-count: 1;
    }
    .photo.prev {
      animation-name: prev;
      animation-duration: 0.5s;
      animation-iteration-count: 1;
    }
  }
  @keyframes next {
    from {
      transform: translateX(100%);
    }
    to {
      transform: translateX(0%);
    }
  }
  @keyframes prev {
    from {
      transform: translateX(-100%);
    }
    to {
      transform: translateX(0%);
    }
  }
  //buttons
  button {
    font-size: 3rem;
    padding: 0;
  }
  .btn-container {
    height: 100%;
    width: 25vw;
    display: flex;
    align-items: center;
    justify-content: stretch;
    button {
      display: flex;
      flex-grow: 1;
    }
    button.prev {
      justify-content: flex-end;
    }
  }
  .close-btn {
    position: absolute;
    top: 1rem;
    right: 1rem;
    display: block;
    font-size: 3rem;
    z-index: 1;
    color: var(--sonic-silver);
  }
  .close-btn,
  button {
    :hover {
      color: var(--cadet-blue-crayola);
    }
  }
  //slider
  .photos-slider {
    display: flex;
    flex-direction: row;
    gap: 1rem;
    justify-content: center;
    overflow-x: scroll;
  }
  .image-container {
    flex: 0 0 1;
    width: 10vh;
    height: 10vh;
  }
  .image-container.active {
    border: 2px solid var(--cultured);
    border-radius: var(--radius);
  }
  .photo {
    height: 100%;
    width: 100%;
    object-fit: cover;
    border-radius: var(--radius);
  }

  @media (max-width: 600px) {
    height: auto;
    .main {
      display: none;
    }
    .photos-slider {
      flex-direction: column;
      width: 100vw;
      padding: 1rem;

      .image-container {
        height: auto;
        width: 100%;
      }
    }
  }
`

export default Carousel
