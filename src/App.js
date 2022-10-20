import AOS from "aos";
import "aos/dist/aos.css";
import { createContext, useEffect, useState } from "react";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Home from "./page/Home/Home";
import SingleBlog from "./page/Home/SingleBlog";
import WriteBlog from "./page/Home/WriteBlog";
import Login from "./page/Login/Login";
import Register from "./page/Login/Register";
import Footer from "./page/shared/Footer";
import Navbar from "./page/shared/Navbar";
import './style.scss';
import Protected from "./util/Protected";
export const UserContext = createContext();



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
                path: "/post/:postId",
                element: <SingleBlog />,
            },
            {
                path: "/write",
                element: <Protected children={<WriteBlog />} />,
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
    const [global, setGlobal] = useState({})
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);


    return (
        <div
            className={`${
                global.pathName === "/login" || global.pathName === "/register"
                    ? ""
                    : "app"
            }`}
        >
            <div
                className="container"
            >
                <UserContext.Provider value={{ global, setGlobal }}>
                    <RouterProvider router={router} />
                </UserContext.Provider>
            </div>
        </div>
    );
}


export default App;
