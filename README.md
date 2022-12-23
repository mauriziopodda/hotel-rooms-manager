# hotel-rooms-manager

An hotel rooms manager that shows the hotel room facilities, occupancy status, cleaning status and more...

Uses those technologies:

- `vite` as server/bundler, why? You can find comparisons here https://vitejs.dev/guide/comparisons.html
- `eslint` and `prettier` for code linting
- `reactjs` as frontend library

Some of the packages used:

- `jotai` for state management that avoids re-rendering and complex use of multiple contexts https://jotai.org/
- `axios` for data fetching, IMO the easiest and best package https://www.npmjs.com/package/axios
- `zod` as validator https://github.com/colinhacks/zod
- `stitches` for styling CSS-in-JS, very fast loading https://stitches.dev/
- `moment` to manage the dates

SOme react feature used:

- lazy load
- hooks (also custom)

## How to start the application

1. Download the package and open it with your IDE
2. In the terminal: `yarn install` (or npm, pnpm or other package manager)
3. In the terminal: `yarn dev` to start
4. In the terminal: `yarn typecheck` to start the type checking
5. On the browser: Go to `http://127.0.0.1:5173/` (or whatever other port you will setup in the `vite.config.ts`)