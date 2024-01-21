import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

import Nav from './components/navbar/Nav'
import Footer from './components/footer/Footer';

import HomePage from './pages/HomePage';
import ProjectPage from './pages/ProjectPage';
import ContactPage from './pages/contact-page/ContactPage';


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
      { path: "/projects", element: <ProjectPage/>},
      { path: "/contact", element: <ContactPage/> }
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />
}

export default App
