import React from "react"
import { Link } from 'gatsby';
import Heading from '../components/Heading';

export default function About() {
  return (
    <div style={{ color: 'teal' }}>
      <Link to="/">Home</Link>
      <Heading>About Gatsby</Heading>
      <p>Such wow. Very React.</p>
    </div>
  )
}
