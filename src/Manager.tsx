import { paletteAtom } from './atoms/palette'
import { Layout } from './components/layout'
import { Loader } from './components/loader'
import { NoRoute } from './components/no_route'
import { RoomsList } from './components/rooms_list'
import { styled } from './components/styled/common'
import { useAtomValue } from 'jotai'
import React, { useMemo } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import type { FC } from 'react'

// TODO: add comments for everything
// TODO: improve translations
// TODO: move all the icons
// TODO: put some threejs stuff
// TODO: add tooltips
// TODO: put some map/floor statistics
// TODO: improve best solution for the scrollar jumping

const Stats = React.lazy(async () => import('./components/stats'))
const ThreeD = React.lazy(async () => import('./components/three_d'))

const Manager: FC = () => {
  const palette = useAtomValue(paletteAtom)

  const Application = useMemo(
    () =>
      styled('div', {
        padding: 30,
        backgroundColor: palette.body.backgroundColor,
        '@sm': {
          padding: 15,
        },
      }),
    [palette.body.backgroundColor]
  )

  return (
    <Application>
      <Router>
        <Routes>
          <Route element={<Layout />} path="/">
            <Route index element={<RoomsList />} />
            <Route
              element={
                <React.Suspense fallback={<Loader mode="fullScreen" />}>
                  <RoomsList />
                </React.Suspense>
              }
              path="/"
            />
            <Route
              element={
                <React.Suspense fallback={<Loader mode="fullScreen" />}>
                  <Stats />
                </React.Suspense>
              }
              path="/stats"
            />
            <Route
              element={
                <React.Suspense fallback={<Loader mode="fullScreen" />}>
                  <ThreeD />
                </React.Suspense>
              }
              path="/3d"
            />
            <Route element={<NoRoute />} path="*" />
          </Route>
        </Routes>
      </Router>
    </Application>
  )
}

export default Manager
