import React from 'react'
import ReactDOM from 'react-dom/client'
import {FrontPage} from './Route/FrontPage/component/FrontPage'
import {TransitionProvider} from './Route/TransitionProvider/TransitionProvider'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'

import { HomePage } from './Route/FrontPage/component/HomePage/HomePage';
const router = createBrowserRouter([
  {
    path: "/",
    element:<TransitionProvider/>,
    children:[
      {
        path:"/",
        element:<FrontPage/>
      },
      {
        path:"/champions/:id"
      },
      {
        path:'/build',
        element:<HomePage/>
      }
    ]
  }
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
