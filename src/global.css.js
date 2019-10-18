import { createGlobalStyle } from 'styled-components';
import { accent } from 'constants/theme';

export default createGlobalStyle`
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }

  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section {
    display: block;
  }

  html {
    font-size: 62.5%;
  }

  body {
    font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";
    line-height: 1;
    font-size: 1.6rem;
    color: #000;
    background-color: #fff;
    -webkit-text-size-adjust: 100%;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
    -webkit-font-feature-settings: "pnum";
    font-feature-settings: "pnum";
    font-variant-numeric: proportional-nums;
  }

  ol, ul {
    list-style: none;
  }

  blockquote, q {
    quotes: none;
  }

  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  a {
    color: ${accent};
  }

  pre {
    display: block;
    padding: 2rem;
    margin-top: 4rem;
    overflow: auto;
    font-size: 85%;
    line-height: 1.45;
    border-radius: 5px;
    color: ${accent};
    border: 1px solid #ddd;
    font-family: "SFMono-Regular",Consolas,"Liberation Mono",Menlo,Courier,monospace;
  }

  video {
    max-width: 100%;
  }

  p {
    margin-bottom: 2rem;
  }

  .hpyFyd {
    display: none;
  }

  .habWLe {
    width: 60%;
  }

  .vizBox{
    position: absolute;
    padding: 2rem 4rem;
    right: 0;
    width: 40%;
  }

  .subhed{
    font-weight: 600;
    font-size: 20px;
  }

  figure {
    border: 1px solid grey;
    box-shadow: 5px 5px #888888;
    padding: 2rem;
    line-height: 2.3rem;

    

    a {
      color: black;
      padding-bottom: 2rem;
    }
  }

   .gatsby-image-wrapper {
     width: auto;
     height: auto;
     max-width: 200px;
     max-height: 87px;
      
    }

  .container{
    margin: 2rem 4rem;
    display: grid;
    grid-template-columns: repeat(3,1fr);
    grid-gap: 4rem;
    padding: 0 4rem;
    margin: 2rem 0;
    width: 60%;
    line-height: 2.3rem;
  }

  .events {
    padding: 2rem;
    border: 1px solid grey;
    box-shadow: 5px 5px #888888;

    h3 {
      text-transform: uppercase;
      font-weight: 500;
      border-bottom: 1px solid grey;
      padding-bottom: 1rem;
      margin-bottom: 1rem;
    }

    .date {
      margin-top: 2rem;
      font-size: 1.5rem;
      padding: 0.5rem 0rem;
    }

    a {
      color: black;
      padding: 2rem 0rem;
    }

  }
`;
