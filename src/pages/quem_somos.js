import React from 'react'

import Layout from "../components/layout"
import "../styles/contact.scss"
import {Link, graphql, useStaticQuery} from 'gatsby'
import Img from "gatsby-image"



const ContactPage = () => {
    const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "images/pp.png" }) {
        childImageSharp {
          fixed (width: 200, height: 200){
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)
    return(
        <Layout>
            <h1><center>Quem somos .. </center></h1>
                <br></br>
                <h3><center>Sigam a gente nas redes sociais</center></h3>
                <h4>Leonardo Lima</h4>
                <Img
                    fixed={data.file.childImageSharp.fixed}
                />
                <p>
                     Instagram: 
                    <a href="https://instagram.com/arochaleo" 
                    target="_blank">  @arochaleo</a>
                </p>
                <p>
                     Facebook: 
                    <a href="https://www.facebook.com/leonardo.vinicius.923" 
                    target="_blank">  Leonardo Vinicius</a>
                </p>
                <p>
                     LinkedIn: 
                    <a href="https://www.linkedin.com/in/leonardo-vin%C3%ADcius-r-7ba1a6118/" 
                    target="_blank">  Leonardo Vinicius</a>
                </p>
                <br></br>

                <h4>Pedro Rocha</h4>

                <p>
                    Instagram: 
                    <a href="https://instagram.com/pedrofernandodr" 
                    target="_blank">  @pedrofernandodr</a>
                </p>
                <p>
                     LinkedIn: 
                    <a href="https://www.linkedin.com/in/pedro-fernando-dalbello-rocha-437b791a5/" 
                    target="_blank">  Pedro Rocha</a>
                </p>
                <br></br>

                <h4>Robson Souza</h4>
                <p>
                    Instagram: 
                    <a href="https://www.instagram.com/robsonfesouza/" 
                    target="_blank">  @robsonfesouza</a>
                </p>
                <p>
                     Facebook: 
                    <a href="https://www.facebook.com/robs.souza" 
                    target="_blank">  Robson Souza</a>
                </p>
                <p>
                     LinkedIn: 
                    <a href="https://www.linkedin.com/in/robson-souza-2a6534155/" 
                    target="_blank">  Robson Souza</a>
                </p>
                <br></br>
        </Layout>
    )
}


export default ContactPage