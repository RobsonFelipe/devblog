import React from 'react'

import Layout from "../components/layout"

const BlogPage = () => {
    return(
        <Layout>
            <h1> Tech Stack </h1>
            <br></br>
                <h2>Ferramentas utilizadas</h2>
            <br></br>
                <h3>Gatsby JS</h3>
                <p> É uma framework escrita em JavaScript e React, 
                    cuja proposta é ajudar desenvolvedores a construir 
                    aplicações e websites de estaticamente. 
                    Sua função no projeto é basicamente nos disponibilizar 
                    uma plataforma para a criação do blog e disponibilizar suas extenções, 
                    na questão estética do blog/site criado.</p>
            <br></br>
                <h3>GitBash</h3>
                <p>Fornece uma emulação BASH usada para executar o Git 
                    a partir da linha de comando.. Sua função no 
                    projeto é fazer as ações no terminal, instalar devidas 
                    extensões do Gatsby JS e também fazer a postagem do projeto.</p>
            <br></br>
                <h3>GitLab</h3>
                <p>O GitLab é um gerenciador de repositório de software 
                    baseado em git, com suporte a Wiki, gerenciamento de tarefas e CI/CD.
                    Utilizaremos o GitLab como repositório de software padrão
                    de nosso projeto e também nele faremos o controle de versão.
                    Combina com a infraestrutura do projeto por ter integração
                    com o GitBash</p>
                    <br>
                    </br>
        </Layout>
    )
}

export default BlogPage