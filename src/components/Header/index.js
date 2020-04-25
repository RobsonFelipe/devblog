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
  const { author, dev2, dev3, description, socialLeo, socialPedro, socialRobson } = config;

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
      <Wrapper>
        {userConfig.showHeaderImage && (
          <HeaderImage/>
        )}
        <H1><Link to="/">{dev2}</Link></H1>
        {socialPedro &&
          <Social
            github={socialPedro.github}
          />
        }
      </Wrapper>
      <Wrapper>
        {userConfig.showHeaderImage && (
          <HeaderImage/>
        )}
        <H1><Link to="/">{dev3}</Link></H1>
        {socialRobson &&
          <Social
            github={socialRobson.github}
          />
        }
      </Wrapper>
    </Container> 
  );
}

export default Header;