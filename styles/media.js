import { css } from "styled-components";

const sizes = {
  giant: 1440,
  desktop: 1200,
  netbook: 1000,
  tabletL: 900,
  tablet: 768,
  tphone: 600,
  phablet: 480,
  phone: 376,
  tiny: 330,
};

const media = Object.keys(sizes).reduce((acc, key) => {
  const emSize = sizes[key] / 16;
  acc[key] = (...args) => css`
    @media (max-width: ${emSize}em) {
      ${css(...args)};
    }
  `;
  return acc;
}, {});

export default media;
