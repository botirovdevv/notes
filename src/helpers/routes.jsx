import Login from "../layout/Notes/main/Login";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import Register from "../pages/Register";
import IndexNotes from "../pages/notes/IndexNotes";
import Notes from "../layout/Notes/main/Notes"
import Note from "../pages/notes/Note";

export const routes = [
    {
        path: "/",
        element: <Home/>
    },

    {
        path: "/*",
        element: <NotFound/>
    },

    {
        path: "/login",
        element: <Login/> 
    },

    {
        path: "/register",
        element: <Register/>
    },

    {
        path: "/notes",
        element: <IndexNotes/>
    },

    // {
    //     path: "/note",
    //     element: <Notes/>
    // },
    {
        path: "test",
        element: <Note/>
    }
]