import React from 'react';
import { Helmet } from 'react-helmet';

import { Nav, NavDesktop, Projects } from '../containers/';

const Portfolio = () => {
  return (
    <>
      <Helmet>
        <title>Rogelio Samuel | Home</title>
      </Helmet>
      {screen.width >= 1024 ? <NavDesktop /> : null}
      <Projects />
      {screen.width < 1024 ? <Nav inPortfolio={true} /> : null}
    </>
  );
};

export default Portfolio;
