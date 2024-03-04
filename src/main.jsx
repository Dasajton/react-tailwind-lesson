import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import { PageHome, PageAbout, PageContact, PageNotFound } from './pages'
import './index.scss'

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <PageNotFound />,
        children: [
            { path: '/', element: <PageHome /> },
            { path: '/about', element: <PageAbout /> },
            { path: '/contact', element: <PageContact /> },
        ],
    },
])

ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
)
