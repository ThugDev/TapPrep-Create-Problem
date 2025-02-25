import { createBrowserRouter, RouteObject } from 'react-router-dom'
import Home from '../../pages/home'
import CreateProblem from '../../pages/create-problem'
import SelectedSector from '../../pages/selectedSector'
import ProblemList from '../../pages/problem-list'
import ProblemDetail from '../../pages/problem-detail'
import AdminRouter from './memberRouter'
import SignIn from '../../pages/sign-in'
import Auth from '../../auth/page'
import DashBoard from '../../pages/dashBoard'

const MEMBER_ROUTER: RouteObject = {
    element: <AdminRouter />,
    children: [
        {
            path: '/dashboard',
            element: <DashBoard />,
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
}

const PUBLIC_ROUTER: RouteObject = {
    element: <AdminRouter />,
    children: [
        {
            path: '/',
            element: <Home />,
        },
        {
            path: '/signIn',
            element: <SignIn />,
        },
        {
            path: '/auth',
            element: <Auth />,
        },
    ],
}

export const router = createBrowserRouter([
    {
        children: [PUBLIC_ROUTER, MEMBER_ROUTER],
    },
])
