import Login from "../layout/Notes/header/Login";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import IndexNotes from "../pages/notes/IndexNotes";

export const routes = [
    {
        path: "/",
        element: <Home/>
    },

    {
        path: "*",
        element: <NotFound/>
    },

    {
        path: "/login",
        element: <Login/> 
    }

]