import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

import Nav from './components/navbar'
import Footer from './components/footer';

import HomePage from './pages/HomePage';
import ContactPage from './pages/ContactPage';


import './App.css'

const Layout = () => {

  return (
    <div>
      <Nav/>
      <Outlet/>
      <Footer/>
    </div>
  );
};

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/contact", element: <ContactPage/> }
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />
}

export default App
