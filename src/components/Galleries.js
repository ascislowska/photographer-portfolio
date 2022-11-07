import React, { useState } from "react"
import styled from "styled-components"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import slugify from "slugify"

import Title from "./Title"
import Filters from "./Filters"

const Galleries = ({ galleries }) => {
  const [activeTag, setActiveTag] = useState("all")
  //for filtering animation:
  const [duringFiltering, setDuringFiltering] = useState(false)

  return (
    <Wrapper className="section" id="galleries">
      <Title title="recent work" />
      <Filters
        articles={galleries}
        activeTag={activeTag}
        setActiveTag={setActiveTag}
        setDuringFiltering={setDuringFiltering}
      />

      <div className="grid-container">
        {galleries.map(gallery => {
          //destructuring gallery
          const {
            id,
            data: { title, tags },
          } = gallery
          const image = gallery.data.photos.localFiles[0]
          //filter
          if (tags.includes(activeTag) || activeTag === "all") {
            const slug = slugify(title, { lower: true })
            return (
              <Link
                to={`/${slug}`}
                className={`${
                  duringFiltering ? "duringFiltering item" : "item"
                }`}
                key={id}
              >
                <GatsbyImage image={getImage(image)} className="img" alt="" />
                <div className="info">
                  <span className="title">{title}</span>
                </div>
              </Link>
            )
          } else return null
        })}
      </div>
    </Wrapper>
  )
}
const Wrapper = styled.section`
  .grid-container {
    display: grid;
    gap: 1.5rem;
    grid-auto-rows: 15vw;
    grid-auto-flow: dense;
    justify-items: stretch;
    transition: var(--transition);
    .item {
      display: flex;
      position: relative;
      border-radius: var(--radius);
      overflow: hidden;
      transition: filter 0.2s linear;

      .img {
        object-fit: cover;
        border-radius: var(--radius);
        transition: var(--transition);
      }

      .info {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: rgba(0, 0, 0, 0.6);
        opacity: 0%;
        transition: var(--transition);
        padding: 0.5rem;
        .title {
          font-size: 1.2rem;
          color: white;
          text-align: center;
        }
      }
      :hover {
        .info {
          opacity: 100%;
        }
        .img {
          transform: scale(1.1);
        }
      }
    }
    .item.duringFiltering {
      filter: brightness(0%);
    }

    .item:nth-child(1) {
      grid-column: span 2;
      grid-row: span 2;
    }
    .item:nth-child(2) {
      grid-column: span 2;
    }
    .item:nth-child(8n) {
      grid-column: span 3;
      grid-row: span 2;
    }
    .item:nth-child(7n) {
      grid-row: span 2;
    }
  }
  @media (max-width: 799px) {
    .grid-container {
      grid-template-columns: 100%;
      grid-auto-rows: 25vh;
      .item:nth-child(1n) {
        grid-column: span 1;
        grid-row: span 1;
      }
    }
  }
  @media (min-width: 800px) {
    .grid-container {
      grid-template-columns: repeat(3, 1fr);
      grid-auto-rows: 25vw;
    }
  }
  @media (min-width: 1000) {
    .grid-container {
      grid-template-columns: repeat(4, 1fr);

      grid-auto-rows: 20vw;
    }
  }
  @media (min-width: 1200px) {
    .grid-container {
      grid-template-columns: repeat(5, 1fr);
      grid-auto-rows: 15vw;
    }
  }
`
export default Galleries
