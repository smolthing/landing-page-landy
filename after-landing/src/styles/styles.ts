import { createGlobalStyle } from "styled-components";
import { theme } from './colors';

export const Styles = createGlobalStyle`
    @font-face {
        font-family: "Motiva Sans Light";
        src: url("/landing-page-landy/fonts/Motiva-Sans-Light.ttf") format("truetype");
        font-style: normal;
    }

    @font-face {
        font-family: "Motiva Sans Bold";
        src: url("/landing-page-landy/fonts/Motiva-Sans-Bold.ttf") format("truetype");
        font-style: normal;
    }

    body,
    html,
    a {
        font-family: 'Motiva Sans Light', sans-serif;
    }

    body {
        margin:0;
        padding:0;
        border: 0;
        outline: 0;
        background: ${theme.background};
        overflow-x: hidden;
    }

    a:hover {
        color: ${theme.primary};
    }

    input,
    textarea {
        border-radius: 4px;
        border: 0;
        background: ${theme.formBackground};
        transition: all 0.3s ease-in-out;  
        outline: none;
        width: 100%;  
        padding: 1rem 1.25rem;

        :focus-within {
            background: none;
            box-shadow: ${theme.button} 0px 0px 0px 1px;
        }
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        font-family: 'Motiva Sans Bold', serif;
        color: ${theme.primary};
        font-size: 56px;
        line-height: 1.18;

        @media only screen and (max-width: 890px) {
          font-size: 47px;
        }
      
        @media only screen and (max-width: 414px) {
          font-size: 32px;
        }
    }

    p {
        color: ${theme.primary};
        font-size: 21px;        
        line-height: 1.41;
    }

    h1 {
        font-weight: 600;
    }

    a {
        text-decoration: none;
        outline: none;
        color: ${theme.nav};

        :hover {
            color: ${theme.navActive};
        }
    }
    
    *:focus {
        outline: none;
    }

    .about-block-image svg {
        text-align: center;
    }

    .ant-drawer-body {
        display: flex;
        flex-direction: column;
        text-align: left;
        padding-top: 1.5rem;
    }

    .ant-drawer-content-wrapper {
        width: 300px !important;
    }

    .scroller {
        display: grid;
        & > * {
          grid-area: 1 / 1;
          width: 100%;
        }
        .mask {
          z-index: 2;
        }
        svg {
          width: 100%;
          height: 100%;
        }
      }

    .mask {
        mix-blend-mode: lighten;
        background: white;
    }

    path {
        stroke-width: 120;
        stroke-dasharray: 5700;
        stroke-dashoffset: 5700;
        view-timeline-name: --scribble-path;
        view-timeline-axis: block;
        animation: linear draw both;
        animation-timeline: --scribble-path;
        animation-range: entry 0% cover 50%;
    }

    @keyframes draw {
        to {
          stroke-dashoffset: 0;
        }
    }
`;
