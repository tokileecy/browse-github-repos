# Browse Github Repos

## Tasks:

1. Infinite scroll

## Demo

View [Demo](https://tokileecy.github.io/browse-github-repos/)

## Architecture

- TypeScript
- React hooks
- Next.js (SSR and SSG)
- @emotion/css (CSS in JS)
- Axios (HTTP Client)
- Storybook (manual test)

## Code quality

- ESLint
- Prettier

## App Directory structure

```
.
├── api                     # Api schema, functions
├── components              # React components
├── containers              # Next.js page container components
├── hooks                   # React hooks
├── pages                   # Next.js page components for route and SSG, SSR.
├── public                  # Public Assets
├── stories                 # Storybooks stories
├── styles                  # Global Styles Settings
└── utils                   # Utils functions
```

## Component Directory structure

```
Component
├── Component.stories.tsx   # Component stories
├── Component.styles.ts     # Component styles
├── Component.tsx           # React Component
└── index.ts
```
## Env Description

NODE Version: 12.x, 14.x, 16.x

### development

1. storybook (document of components)

running at Port `$DOCS_PORT` default is at Port 6006.

```sh
DOCS_PORT=<DOCS_PORT> yarn storybook
```

2. dev (Task demo site)

running at Port `$WEB_PORT` default is at Port 3000.

```sh
WEB_PORT=<WEB_PORT> yarn dev
```

### production

1. SSR

simply build app and run start:

```sh
yarn build && yarn start
```

2. SSG

export static page.

```sh
yarn export
```
