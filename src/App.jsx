
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Pastes from './components/Pastes'
import ViewPaste from './components/ViewPaste'
const router=createBrowserRouter(
  [
    {
      path:"/",
      element:
      <div>
        <Navbar></Navbar>
        <Home></Home>
      </div>
    },
    {
      path:"/pastes",
      element:
      <div>
         <Navbar></Navbar>
         <Pastes></Pastes>
      </div>
    },
    {
      path:"/pastes/:id",
      element:
      <div>
        <Navbar></Navbar>
        <ViewPaste></ViewPaste>
      </div>
    },
  ]
)
function App() {
 

  return (
    <>
       <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App
