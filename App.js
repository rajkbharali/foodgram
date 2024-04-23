import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'

import Header from './components/Header'
import Body from './components/Body'
import Help from './components/Help'
import Error from './components/Error'

const App = () => {
    return (
        <div>
            <Header/>
            <Outlet/>
        </div>
    )}

const appRouter = createBrowserRouter([
 {
    path : "/",
    element : <App/>,
    children : [
        {
            path : "/",
            element : <Body/>
        },
        {
           path : "/help",
           element : <Help/>
        }
    ],
    errorElement : <Error/>
 }
])

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<RouterProvider router={appRouter}/>)
