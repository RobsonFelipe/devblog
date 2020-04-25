import React from 'react';
import userConfig from '../../../config';

import Container from '../Container';
import HeaderImage from '../HeaderImage';
import Social from '../Social';
import H1 from '../H1';
import P from './P';
import Link from './Link';
import Wrapper from './Wrapper';

function Header({ config }) {
  const { author, dev1, dev2, dev3, description, socialLeo, socialPedro, socialRobson } = config;

  return (
    <Container>
      <Wrapper>
      <H1><Link to="/">{author}</Link></H1>
      <P>{description}</P>
      {userConfig.showHeaderImage && (
          <HeaderImage/>
        )}
      </Wrapper>
        <H1><Link to="/">{dev1}</Link></H1>
        {socialLeo &&
          <Social
            github={socialLeo.github}
          />
        }
        <H1><Link to="/">{dev2}</Link></H1>
        {socialPedro &&
          <Social
            github={socialPedro.github}
          />
        }
        <H1><Link to="/">{dev3}</Link></H1>
        {socialRobson &&
          <Social
            github={socialRobson.github}
          />
        }
    </Container> 
  );
}

export default Header;