import React from 'react'
import {
  useRoutes,
} from 'react-router-dom'
import LandingPage from './pages/LandingPage'

export default function App() {
  const routes = useRoutes([
    {
      path: '/',
      element: <LandingPage />
    },
  ])

  return routes
}