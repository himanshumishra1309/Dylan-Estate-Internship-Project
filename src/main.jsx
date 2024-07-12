import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './Layout.jsx'
import Firstpage from './components/FirstPage/Firstpage.jsx'
import Part1 from './components/SecondPage/Part1/Part1.jsx'
import Part2 from './components/SecondPage/Part2/Part2.jsx'
import Part3 from './components/SecondPage/Part3/Part3.jsx'
import Part4 from './components/SecondPage/Part4/Part4.jsx'
import Part5 from './components/SecondPage/Part5/Part5.jsx'
import ThirdPage from './components/ThirdPage/ThirdPage.jsx'
import LastPage from './components/LastPage/LastPage.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element:<Layout/> ,
    children: [
      {
        path: "",
        element: <Firstpage/>,
      },
      {
        path:"part1",
        element: <Part1/>
      },
      {
        path:"part2",
        element: <Part2/>
      },
      {
        path:"part3",
        element: <Part3/>
      },
      {
        path:"part4",
        element: <Part4 />,
      },
      {
        path:"part5",
        element: <Part5/>
      },
      {
        path:"thirdpage",
        element: <ThirdPage/>
      },
      {
        path:"lastpage",
        element:<LastPage/>
      },
    ]
  }
])



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>, 
)
