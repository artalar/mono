# MONO - monotone css framework for semantic html

## Motivation and goals

The main purpose of this design is document or blog sites, the classic web.

- communicate with a user through forms rather than colors, which is more obvious and accessible
- get a unique design, away from boring standards
- possibility to apply any color you need for branding
- use only semantic selectors, no component classes to force a native platform and a11y

## Instalation

```
npm i @artalar/mono
```

Or

```
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@artalar/mono/mono.css">
```

## Usage

### Setup docs site


There are two options (first the simple one).

1. Add `mono-all` class to the root (body) of your site and write semantic html
2. Add `mono` class to needed semantic elements

### Template

Create html file and fill it like [this](https://github.com/artalar/mono/blob/main/404.html), then paste all you content (`.md` generator output) to the `main` tag. Change navigation and footer as you need.

### Change colors

Use `--mono-main` and `--mono-back` css variables. You could use [our sandbox](https://monocss.vercel.app) to try different colors and get the contrast (with `sync` checkbox enabled).

## Development

- `npm run build:css` rebuilds `mono.css` from the component styles.
- `npm run test` runs the screenshot suite.
- `npm run test:update` records new baselines.

## Roadmap

- add styles to input elements and it variations
- add styles to the rest html elements
- fix design consistance
- use consistent sizings by css variables
- fix cross-browser issues

PR welcome!

## Inspiration

- https://every-layout.dev/
- https://yegor256.github.io/tacit/
- https://codehipsters.com/
