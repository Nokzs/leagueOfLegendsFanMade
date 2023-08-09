import React from 'react'
import ReactDOM from 'react-dom/client'

import FrontPage from './Componenents/FrontPage'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
const router = createBrowserRouter([
  {
    path: "/",
    element: <FrontPage />,
    
  },
  {
    path:"/champions",
    
  },
  {
    path:'/build',
  }
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
