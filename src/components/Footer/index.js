import React from 'react';
import Container from '../Container';
import Social from '../Social';
import H2 from '../H2';
import Link from './Link';
import Wrapper from './Wrapper';

function Footer({ config }) {
  const {dev1, dev2, dev3, socialLeo, socialPedro, socialRobson } = config;

  return (
    <Container>
      <Wrapper>
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
        </Wrapper>
    </Container> 
  );
}

export default Footer;