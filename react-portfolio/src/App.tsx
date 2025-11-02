import { useState } from 'react'
import styles from './App.module.css'
import ThemeProvider from './providers/ThemeProvider'
import { Outlet, createBrowserRouter, RouterProvider, Route, NavLink } from "react-router-dom";
import RootLayout from './layouts/RootLayout';
import Home from './pages/Home';
import About from './pages/About'; 
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import PageNotFound from './pages/PageNotFound';


function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout/>,
      children: [
        {
          path: "",
          element: <Home/>
        },
        {
          path: "about",
          element: <About/>
        },
        {
          path: "projects",
          element: <Projects/>
        },
        {
          path: "contact",
          element: <Contact/>
        },
        {
          path: "*",
          element: <PageNotFound/>
        }
      ]
    }
  ])

  return (
    <div>
        <ThemeProvider>
            <RouterProvider router={router} />
        </ThemeProvider>
    </div>
  )
}

export default App
