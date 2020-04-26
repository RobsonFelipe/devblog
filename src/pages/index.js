import React from "react"
import { Link } from "gatsby"

import Header from "../components/header"
import Footer from "../components/footer"
import Layout from "../components/layout"

const IndexPage = () => {
    return (
        <Layout>
          <h1>Olá Pessoal</h1>
          <br></br>
          <h2> Este é nosso blog do projeto interdiciplinar</h2>
          <br></br>
          <p> Entre em contato direto conosco <Link to="/quem_somos"> Contate-nos. </Link></p>
        </Layout>
    )
}
export default IndexPage
