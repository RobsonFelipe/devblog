import React from 'react';
//import userConfig from '../../../config';

import Container from '../Container';
//import HeaderImage from '../HeaderImage';
import Social from '../Social';
import H1 from '../H1';
//import P from './P';
import Link from './Link';
import Wrapper from './Wrapper';

function Footer({ config }) {
  const { author, socialLeo, socialRobson, socialPedro } = config;

  return (
    <Container>
      <Wrapper>
        <H1><Link to="/">{author}</Link></H1>
        {socialLeo &&
          <Social
            github={socialLeo.github}
          />
        }
        <H1><Link to="/">{author}</Link></H1>
        {socialPedro &&
          <Social
            github={socialPedro.github}
          />
        }
        <H1><Link to="/">{author}</Link></H1>
        {socialRobson &&
          <Social
            github={socialRobson.github}
          />
        }
      </Wrapper>
    </Container> 
  );
}

export default Footer;