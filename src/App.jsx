
import './App.css'
import About from './components/About'
import Body from './components/Body'
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Header from './components/Header';
import Contact from './components/Contact';

function App() {
  

  return (
   <div>
    <RouterProvider router={appRouter}>
      <Header/>
    </RouterProvider>
       
   </div>
  )
}

const appRouter=createBrowserRouter([
  {
    path:"/",
    element:<Body/>
  },
  {
    path:"/about",
    element:<About/>
  },
  {
    path:"/contact",
    element:<Contact/>
  }
 

])

export default App
