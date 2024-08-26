import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../pages/Home";
import MainLayout from "../components/layout/MainLayout";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Starss from "../pages/Starss";
import Payment from "../pages/Payment";
import ScrollToTop from "../components/resuable/ScrollToTop ";

const router = createBrowserRouter([
    {
        path: "/",
        element: (
            <>
                <ScrollToTop />
                <MainLayout />
            </>
        ),
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/about",
                element: <About />
            },
            {
                path: "/contact",
                element: <Contact />
            },
            {
                path: "stars",
                element: <Starss />
            },
            {
                path: "payment",
                element: <Payment />
            }
        ]
    }
]);

export const MainRouter = () => {
    return <RouterProvider router={router} />;
};
