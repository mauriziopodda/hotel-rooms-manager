# hotel-rooms-manager

An hotel rooms manager that shows the hotel room facilities, occupancy status, cleaning status and more...

Uses:

- `vite` as server
- `jotai` for state management that avoids re-rendering and complex use of multiple contexts
- `axios` for data fetching
- `zod` as validator
- `stitches` for styling
- `eslint` and `prettier` for code linting
- `moment` to manage the dates

## How to start the application

1. Download the package and open it with your IDE
2. In the terminal: `yarn install` (or npm, pnpm or other package manager)
3. In the terminal: `yarn dev` to start
4. In the terminal: `yarn typecheck` to start the type checking
5. On the browser: Go to `http://127.0.0.1:5173/` (ot whatever other port you will setup in the `vite.config.ts`)
