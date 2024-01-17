# Viewport Calculator Plugin
<!-- logo -->
[![npm Version](https://img.shields.io/badge/npm-v0.0.5-black?style=flat&logo=npm)](google.com)

The JavaScript plugin efficiently calculates the viewport width, considering both the viewport size and the size of individual elements. This functionality provides a comprehensive solution for accurately determining and managing the dimensions within the viewport for enhanced web development and responsive design.

<!-- ## 1.0.0 Major Changes -->

## Example
### With styled-components plugin:
```javascript
import styled from "styled-components"
import { theme } from "../../theme"
import ViewportCalculator from "../../viewportCalculator"

export const HeaderElement = styled.div`
    margin: 20px;
    padding: 0 150px;
    background-color: black;
    border-radius: 50px;

    @media ${theme.media.laptop} {
        padding: ${ViewportCalculator(15, "laptop")};
    }
    @media ${theme.media.tablet} {
        padding: ${ViewportCalculator(15, "tablet")};
        margin: 10px 20px;
    }
    @media ${theme.media.mobile} {
        padding: ${ViewportCalculator(15, "mobile")};
        margin: 5px;
    }
`
```

## Default Breakpoints
- Desktop: 1280px,
- Laptop: 1024px,
- Tablet: 768,
- Large Mobile: 640px,
- Mobile: 480px

## Features
- By default, it uses the most popular breakpoints in the frontend development.
- Simple and minimalist.
- Working with all Javascript Frameworks, CSS Plugins, Preprocessors, etc.

## Installation
Yarn:
```bash
yarn add viewport-calculator
```
npm:
```bash
npm install viewport-calculator
```
