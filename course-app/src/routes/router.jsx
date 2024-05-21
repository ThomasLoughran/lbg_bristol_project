import { createBrowserRouter } from "react-router-dom";
import HomePage from "./homepage";
import StudentsPage from "./studentsPage";
import Root from "./root";
import ErrorPage from "./errorPage";
import CoursesPage from "./coursesPage";


export const router = createBrowserRouter([
    {
        path:'/',
        element: <Root />,
        errorElement: <ErrorPage />,
        children: [
            {
                path:'/homepage',
                element: <HomePage />
            },
            {
                path: 'students',
                element: <StudentsPage />
            },
            {
                path: 'courses',
                element: <CoursesPage />
            }
        ]
    }
])