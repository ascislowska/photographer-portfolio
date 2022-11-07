import React, { useState, useEffect, useCallback } from "react"
import Airtable from "airtable"
import styled from "styled-components"
import Title from "./Title"
import Blob from "./Blob"

var base = new Airtable({ apiKey: process.env.GATSBY_AIRTABLE_API }).base(
  process.env.GATSBY_AIRTABLE_BASE_ID
)

const compareVotes = (array1, array2) =>
  array1.length === array2.length &&
  array1.every(
    (value, index) => value.fields.votes === array2[index].fields.votes
  )

const Survey = () => {
  const [items, setItems] = useState([])
  const getRecords = useCallback(async () => {
    const records = await base("survey")
      .select({})
      .firstPage()
      .catch(error => {
        console.log(error)
      })
    const newItems = records.map(record => {
      const { id, fields } = record
      return { id, fields }
    })
    if (!compareVotes(items, newItems)) {
      setItems(newItems)
    }
  }, [items])

  useEffect(() => {
    getRecords()
  }, [getRecords])

  const vote = async (id, votes) => {
    await base("survey")
      .update([
        {
          id: id,
          fields: {
            votes: votes + 1,
          },
        },
      ])
      .catch(err => console.log(err))
    getRecords()
  }

  return (
    <Wrapper>
      <Blob />
      <div className="section-center">
        <Title title="Survey" />
        <div className="survey">
          <h2>Which moments are the most important to catch?</h2>
          <div className="options">
            {items.map(item => {
              const { id, fields } = item
              return (
                <button
                  key={id}
                  onClick={() => {
                    vote(id, fields.votes)
                  }}
                >
                  <h3>{fields.name}</h3>
                  <p>{fields.votes} votes</p>
                </button>
              )
            })}
          </div>
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
    padding: 5rem;
  }
  .blob-wrapper {
    transform: rotate(180deg);
  }
  .survey {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    border-radius: var(--radius);
    background-color: white;
    opacity: 0.9;
    padding: 1.5rem;
    h2 {
      text-align: center;
    }
  }
  .options {
    display: flex;
    gap: 1rem;
    border-radius: var(--radius);
    width: 75vw;
    background-color: white;
    opacity: 0.9;
    padding: 1.5rem;
    button {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      width: 33%;
      padding: 1rem;
      border: 2px solid var(--light-gray);
      transition: var(--transition);
      :hover {
        cursor: pointer;
        background: var(--light-gray);
      }
    }
  }
  @media (max-width: 800px) {
    .options {
      flex-direction: column;
      button {
        width: 100%;
      }
    }
  }
`

export default Survey
