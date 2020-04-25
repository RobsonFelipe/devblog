import React from 'react';
import userConfig from '../../../config';

import Container from '../Container';
import HeaderImage from '../HeaderImage';
import Social from '../Social';
import H1 from '../H1';
import P from './P';
import Link from './Link';
import Wrapper from './Wrapper';

function Footer({ config }) {
  const { dev2, description, socialLeo } = config;

  return (
    <Container>
      <Wrapper>
        {userConfig.showHeaderImage && (
          <HeaderImage/>
        )}
        <H1><Link to="/">{dev2}</Link></H1>
        <P>{description}</P>
        {socialPedro &&
          <Social
            github={socialPedro.github}
          />
        }
      </Wrapper>
    </Container> 
  );
}

export default Footer;