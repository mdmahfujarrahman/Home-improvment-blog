import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Home from "./page/Home/Home";
import SingleBlog from "./page/Home/SingleBlog";
import WriteBlog from "./page/Home/WriteBlog";
import Login from "./page/Login/Login";
import Register from "./page/Login/Register";
import Footer from "./page/shared/Footer";
import Navbar from "./page/shared/Navbar";
import './style.scss';

const LayoutPages = () => {
    return (
        <>
            <Navbar />
            <Outlet />
            <Footer />
        </>
    );
};

const router = createBrowserRouter([
    {
        path: "/",
        element: <LayoutPages />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/post/:id",
                element: <SingleBlog />,
            },
            {
                path: "/write",
                element: <WriteBlog />,
            },
        ],
    },
    {
        path: "/login",
        element: <Login />,
    },
    {
        path: "/register",
        element: <Register />,
    },
]);


function App() {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);

    return (
        <div className="app">
            <div className="container">
                <RouterProvider router={router} />
            </div>
        </div>
    );
}


export default App;
