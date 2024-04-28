import React, { Suspense, lazy } from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './utils/store'

import Header from './components/Header'
import Body from './components/Body'
import Help from './components/Help'
import Error from './components/Error'
import RestaurantMenu from './components/RestaurantMenu'
import CardShimmer from './components/CardShimmer'
import Contact from './components/Contact'

//lazy loading //chunking //demand loading //dynamic bundling //code splitting
const Grocery = lazy(() => import("./components/Grocery"))

const App = () => {
    return (
        <Provider store={store}>
            <div>
                <Header/>
                <Outlet/>
            </div>
        </Provider>
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
        },
        {
            path : "/contact",
            element : <Contact/>
        }
    ],
    errorElement : <Error/>
 }
])

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<RouterProvider router={appRouter}/>)
