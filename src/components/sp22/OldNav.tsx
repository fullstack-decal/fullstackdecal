import React from 'react';
import { Box } from '@chakra-ui/react';

const OldNav = () => {
  return (
    <Box className="navbar navbar--fixed-top">
      <Box className="navbar__inner">
        <Box className="navbar__items">
          {/* <Box aria-label="Navigation bar toggle" className="navbar__toggle clean-btn" type="button" tabindex="0">
              <svg width="30" height="30" viewBox="0 0 30 30" aria-hidden="true">
                <path stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" d="M4 7h22M4 15h22M4 23h22" />
              </svg>
            </Box> */}
          <a className="navbar__brand" href="/sp22">
            <Box className="navbar__logo">
              <img
                src="/img/logo.png"
                alt="Full Stack Decal Logo"
                className="themedImage_node_modules-@docusaurus-theme-classic-lib-next-theme-ThemedImage-styles-module themedImage--light_node_modules-@docusaurus-theme-classic-lib-next-theme-ThemedImage-styles-module"
              />
            </Box>
            <b className="navbar__title">Full Stack Decal Spring 2022</b>
          </a>
          <a className="navbar__item navbar__link" href="/sp22/Syllabus">
            Syllabus
          </a>
          <a className="navbar__item navbar__link" href="/sp22/staff">
            Staff
          </a>
          <a className="navbar__item navbar__link" href="/sp22/resources">
            Resources
          </a>
        </Box>
      </Box>
    </Box>
  );
};

export default OldNav;
