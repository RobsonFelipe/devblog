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
  const { author, dev1, dev2, dev3, description, socialLeo, socialPedro, socialRobson } = config;

  return (
    <Container>
      <Wrapper>
      {userConfig.showHeaderImage && (
          <HeaderImage/>
        )}
      <H1><Link to="/">{author}</Link></H1>
      <P>{description}</P>
      </Wrapper>
        <H2><Link to="/">{dev1}</Link></H2>
        {socialLeo &&
          <Social
            github={socialLeo.github}
          />
        }
        <H2><Link to="/">{dev2}</Link></H2>
        {socialPedro &&
          <Social
            github={socialPedro.github}
          />
        }
        <H2><Link to="/">{dev3}</Link></H2>
        {socialRobson &&
          <Social
            github={socialRobson.github}
          />
        }
    </Container> 
  );
}

export default Header;