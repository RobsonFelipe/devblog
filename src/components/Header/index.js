import React from 'react';
import userConfig from '../../../config';

import Container from '../Container';
import HeaderImage from '../HeaderImage';
import Social from '../Social';
import H1 from '../H1';
import H2 from '../H2';
import P from './P';
import Link from './Link';
import Wrapper from './Wrapper';

function Header({ config }) {
  const { author, description, socialLeo, dev1 } = config;

  return (
    <Container>
      <Wrapper>
        {userConfig.showHeaderImage && (
          <HeaderImage/>
        )}
        <H1><Link to="/">{author}</Link></H1>
        <P>{description}</P>
        <H2><Link to="/">{dev1}</Link></H2>
        {socialLeo &&
          <Social
            github={socialLeo.github}
          />
        }
      </Wrapper>
    </Container> 
  );
}

export default Header;