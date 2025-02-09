import { createBrowserRouter } from 'react-router-dom'
import RootLayout from '../../components/layout/layout'
import Home from '../../pages/home'

export const router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout />,
        children: [
            {
                path: '/',
                element: <Home />,
            },
        ],
    },
])
