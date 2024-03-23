# Rohan's Portfolio

This project contains my portfolio which uses the next generation frontend frameworks. It is built in a way that can be easy customized. Follows a monorepo architecture.

The monorepo contains:
- **@portfolio/main**: The main site built using [Next.js](https://nextjs.org/).
- **@portfolio/blog**: The blog site built using [Docusaurus 3.0](https://docusaurus.io/).
- **@portfolio/shared**: Contains common components that are shared across two sites.

## Technologies Used
- Next.js
- Docusaurus
- Vite Plugin
- Rollup Plugin
- React v18

## Development

### Install packages
```
yarn install
```

### Run Development Server
```
yarn dev
```

### Build the Monorepo
```
yarn build
```

### Linting
```
yarn lint
```