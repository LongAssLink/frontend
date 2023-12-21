# Frontend for LongAssLink

The setup is pretty simple, React, React Router, Jotai, Vite.

Styling setup is largely just @shadcn/ui and radix.

## Usage

Start dev server
```bash
yarn dev
```
Dev server also proxies api calls to the backend (expected to be available at localhost:9000)

Build production bundle
```bash
yarn build --emptyOutDir
```
This will produce an output at `../public`. This should work with the correct file structure where this project lives as a submodule inside the backend repo. The rust backend then serves this folder (_public_) as static files.