import React from 'react';
import 'prismjs/themes/prism.css';

import '../global-styles';
import userConfig from '../../config';

import Header from '../components/Header';
import GlobalStyle from '../global-styles';

class Template extends React.Component {
  render() {
    const { children } = this.props;
    return (
      <div>
        <GlobalStyle />
        <Header config={userConfig} />
        {children}
        <div id="disqus_thread"></div>
          <script>
          
            var disqus_config = function () {
              this.page.url = 'https://www.blogpiiunifil.com/'; 
              this.page.identifier = 'postagens'; // Replace PAGE_IDENTIFIER with your page's unique identifier variable
            };
          
          (function() { // DON'T EDIT BELOW THIS LINE
            var d = document, s = d.createElement('script');
            s.src = 'https://https-www-blogpiiunifil-com.disqus.com/embed.js';
            s.setAttribute('data-timestamp', +new Date());
            (d.head || d.body).appendChild(s);
          })();
          </script>
          <noscript>Please enable JavaScript to view the <a href="https://disqus.com/?ref_noscript">comments powered by Disqus.</a></noscript>
      </div>
    );
  }
}

export default Template;
