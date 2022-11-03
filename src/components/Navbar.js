import React from "react"
import styled from "styled-components"
import socialmedia from "../assets/socialmedia"
const Navbar = () => {
  return (
    <Wrapper>
      <a href="/#contact" className="contact-btn">
        <div className="btn">Contact</div>
      </a>

      {socialmedia.map(link => {
        return (
          <a href={link.url} key={link.name} target="_blank" rel="noreferrer">
            <div className="btn">{link.icon}</div>
          </a>
        )
      })}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  z-index: 2;
  display: flex;
  width: 100%;
  justify-content: flex-end;
  gap: 0.5rem;
  background-color: rgba(0, 0, 0, 0);
  font-weight: 400;
  text-shadow: var(--dark-shadow);
  padding: 0.5rem;
  a {
    color: var(--white);
    /* margin: 1rem 0.25rem; */
  }
  a:hover {
    color: var(--light-gray);
  }
  .contact-btn {
    display: flex;
    align-items: center;
    .btn {
      font-size: 1.2rem;
      line-height: 1.2rem;
    }
  }
`
export default Navbar
