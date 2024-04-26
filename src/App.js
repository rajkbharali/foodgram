import React, { Suspense, lazy } from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'

import Header from './components/Header'
import Body from './components/Body'
import Help from './components/Help'
import Error from './components/Error'
import RestaurantMenu from './components/RestaurantMenu'
import CardShimmer from './components/CardShimmer'

//lazy loading
//chunking
//demand loading
//dynamic bundling
//code splitting
const Grocery = lazy(() => import("./components/Grocery"))

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
        },
        {
            path : "/restaurants/:id",
            element : <RestaurantMenu/>
        },
        {
            path : "/grocery",
            element : <Suspense fallback={<CardShimmer/>} ><Grocery/></Suspense>
        }
    ],
    errorElement : <Error/>
 }
])

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<RouterProvider router={appRouter}/>)
