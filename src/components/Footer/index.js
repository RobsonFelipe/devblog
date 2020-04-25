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
  const { author1, author2, author3, socialLeo, socialRobson, SocialPedro } = config;

  return (
    <Container>
      <Wrapper>
        <H1><Link to="/">{author1}</Link></H1>
        {socialLeo &&
          <Social
            github={socialLeo.github}
          />
        }
        <H1><Link to="/">{author2}</Link></H1>
        {socialPedro &&
          <Social
            github={SocialPedro.github}
          />
        }
        <H1><Link to="/">{author3}</Link></H1>
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