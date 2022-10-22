import React from "react"
import Navbar from "./Navbar"
import "../assets/main.css"

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
    </>
  )
}

export default Layout
