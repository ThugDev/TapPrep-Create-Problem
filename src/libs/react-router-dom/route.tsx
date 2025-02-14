import { createBrowserRouter } from 'react-router-dom'
import RootLayout from '../../components/layout/layout'
import Home from '../../pages/home'
import CreateProblem from '../../pages/create-problem'
import SelectedSector from '../../pages/selectedSector'
import ProblemList from '../../pages/problem-list'
import ProblemDetail from '../../pages/problem-detail'

export const router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout />,
        children: [
            {
                path: '/',
                element: <Home />,
            },
            {
                path: '/selectedSector/problemList',
                element: <ProblemList />,
            },
            {
                path: '/createProblem',
                element: <CreateProblem />,
            },
            {
                path: '/selectedSector',
                element: <SelectedSector />,
            },
            {
                path: `/selectedSector/problemList/problemDetail`,
                element: <ProblemDetail />,
            },
        ],
    },
])
