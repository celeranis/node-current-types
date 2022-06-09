# TypeScript Declarations for the latest Node.js features
For the impatient people using versions of Node.js ahead of LTS (me)

### ⚠️ DISCLAIMER
These typings were originally created for my own personal use, and **have not been extensively tested**. Feel free to file any bug reports or fork the project for your own needs.

## Installation
```sh
# with npm
npm install --save-dev @celeranis/node-current-types

# with yarn
yarn add --dev @celeranis/node-current-types

# with pnpm
pnpm add --save-dev @celeranis/node-current-types
```

## Usage
After installation, add this to your project's `tsconfig.json` and/or `jsconfig.json`'s `compilerOptions`:
```json
"types": ["@celeranis/node-current-types"]
```