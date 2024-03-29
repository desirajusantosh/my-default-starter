import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi, people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `600px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default () => (
	<div style={{color:'dodgerblue' ,marginBottom: `1.45rem`, fontSize:'24px'}}>
	<Link to="/contact/">Contact</Link>
	<Header headerText="It's pretty cool" />
	<Header />Hello World
	<p1>Howdy</p1>
	<Image alt=""/>
	</div>
)
//export default IndexPage
