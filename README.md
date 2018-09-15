# eslint-config-react

I created this package for easy reuse in all of my personal projects with all of my sensible defaults.

## Install

Install this package and all its peerDependencies with the following commands:

```bash
npx install-peerdeps --dev @coreyleelarson/eslint-config-default
npm install-peerdeps --dev @coreyleelarson/eslint-config-react
```

## Configure

### Eslint
Create a `.eslintrc.json` file:

```json
{
  "extends": "@coreyleelarson/react"
}
```

### Prettier
Create a `.prettierrc.json` file with desired prettier settings:

```json
{
  "singleQuote": true,
  "trailingComma": "all"
}
```
