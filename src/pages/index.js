import React from "react"
import Heading from '../components/Heading';
import Layout from '../components/Layout';
import { Link } from 'gatsby';

export default function Home() {
  return (
    <Layout>
      <Heading>Hello world!</Heading>
      <p>
        What do I like to do? Lots of course but definitely enjoy building
        websites.
      </p>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
    </Layout>
  )
}
