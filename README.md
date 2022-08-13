# MONO - monotone css framework for semantic html

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
