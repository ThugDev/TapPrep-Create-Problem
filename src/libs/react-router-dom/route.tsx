import { createBrowserRouter, RouteObject } from 'react-router-dom'
import Home from '../../pages/home'
import CreateProblem from '../../pages/create-problem'
import ProblemList from '../../pages/problem-list'
import ProblemDetail from '../../pages/problem-detail'
import AdminRouter from './member-router'
import SignIn from '../../pages/sign-in'
import Auth from '../../auth/page'
import DashBoard from '../../pages/dash-board'

const MEMBER_ROUTER: RouteObject = {
    element: <AdminRouter />,
    children: [
        {
            path: '/dashboard',
            element: <DashBoard />,
        },
        {
            path: '/dashboard/problemList/:sector',
            element: <ProblemList />,
        },
        {
            path: '/createProblem',
            element: <CreateProblem />,
        },
        {
            path: `/dashboard/problemDetail`,
            element: <ProblemDetail />,
        },
        {
            path: `/create-problem`,
            element: <CreateProblem />,
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
