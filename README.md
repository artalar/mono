# MONO - monotone css framework for semantic html

Live showcase: https://monocss.vercel.app

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

Use `--mono-main` and `--mono-back` css variables. The [Storybook showcase](https://monocss.vercel.app) includes examples you can use to test combinations.

## Development

- `npm run build:css` rebuilds `mono.css` from the component styles.
- `npm run storybook` starts the showcase and component catalog.
- `npm run build-storybook` builds the static Storybook site.
- `npm run test` runs Storybook interaction and accessibility tests in Vitest.
- `npm run test:watch` runs Storybook tests in watch mode.

## Storybook deployment

GitHub Actions deploys Storybook to Vercel from `main` and keeps https://monocss.vercel.app on the latest Storybook build.

Repository secrets required by the workflow:

- `VERCEL_TOKEN`
- `VERCEL_ORG_ID`
- `VERCEL_PROJECT_ID`

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
