import React from "react"
import { Link } from "gatsby"
import Heading from "../components/Heading"

export default function Contact() {
  return (
    <div style={{ color: `teal` }}>
      <Link to="/">Home</Link>
      <Heading>Contact</Heading>
      <p>Send us a message!</p>
    </div>
  )
}
