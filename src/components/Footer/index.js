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
  const { author, description, socialLeo } = config;

  return (
    <Container>
      <Wrapper>
        {userConfig.showHeaderImage && (
          <HeaderImage/>
        )}
        <H1><Link to="/">{author}</Link></H1>
        <P>{description}</P>
        {socialLeo &&
          <Social
            github={socialLeo.github}
          />
        }
      </Wrapper>
    </Container> 
  );
}

export default Footer;