import { createBrowserRouter } from "react-router-dom";
import HomePage from "./homepage";
import StudentsPage from "./studentsPage";
import Root from "./root";


export const router = createBrowserRouter([
    {
        path:'/',
        element: <Root />,
        children: [
            {
                path:'/homepage',
                element: <HomePage />
            },
            {
                path: 'students',
                element: <StudentsPage />
            }
        ]
    }
])