import React from "react"
import styled from "styled-components"

const Filters = ({ articles, activeTag, setActiveTag, setDuringFiltering }) => {
  //create list of unique tags
  const tagList = new Set()
  articles.map(article => article.data.tags.map(tags => tagList.add(tags)))
  const filterOptions = ["all", ...tagList]

  // filtering with animation
  const filter = tag => {
    //blackout
    setDuringFiltering(true)
    //filter and show after 0.5s
    const displayFiltering = () => {
      setActiveTag(tag)
      setDuringFiltering(false)
    }
    setTimeout(displayFiltering, 300)
  }

  return (
    <Wrapper>
      {filterOptions.map((tag, index) => {
        return (
          <button
            key={index}
            className={`${tag === activeTag ? "tags active" : "tags"}`}
            onClick={() => filter(tag)}
          >
            {tag}
          </button>
        )
      })}
    </Wrapper>
  )
}
const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: flex-end;
  min-height: 4.5rem;
  padding: 1rem 0rem 1rem 1rem;
  button.tags:hover,
  button.tags.active {
    border-bottom: 1px solid var(--sonic-silver);
  }
`

export default Filters
