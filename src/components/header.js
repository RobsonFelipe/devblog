import React from 'react'
import {Link, graphql, useStaticQuery} from 'gatsby'

import headerStyles from './header.module.scss'

const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      site{
        siteMetadata{
          title
        }
      }
    }
  `)
       return(
            <header className={headerStyles.header}>
              <h1>
                  <Link className={headerStyles.title} to="/">
                        <center>{data.site.siteMetadata.title}</center>
                  </Link>
              </h1>
                  <nav>
                      <ul className={headerStyles.navList}>
                          <li> 
                              <Link  className={headerStyles.navItem} 
                              activeClassName={headerStyles.activeNavItem} 
                              to = "/"> 
                                Blog 
                              </Link>
                          </li>
                          <li>
                              <Link className={headerStyles.navItem} 
                              activeClassName={headerStyles.activeNavItem} 
                              to = "/tech_stack"> 
                                Tech Stack
                              </Link>
                          </li>
                          <li>
                              <Link className={headerStyles.navItem} 
                              activeClassName={headerStyles.activeNavItem} 
                              to = "/projetos_pessoais"> 
                                Projetos Pessoais 
                              </Link>
                          </li>
                          <li>
                              <Link className={headerStyles.navItem} 
                              activeClassName={headerStyles.activeNavItem} 
                              to = "/quem_somos"> 
                                Quem Somos
                              </Link>
                          </li>
                      </ul>
                  </nav>
                  <br></br>
         </header>
       )
}
export default Header