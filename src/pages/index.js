import React from "react"
import Heading from '../components/Heading';
import { Link } from 'gatsby';

export default function Home() {
  return (
    <div style={{color: 'red'}}>
      <Heading>Hello world!</Heading>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
    </div>
  )
}
