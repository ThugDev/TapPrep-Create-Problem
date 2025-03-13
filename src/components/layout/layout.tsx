import { Outlet } from 'react-router-dom'
import Header from './header'
import Footer from './footer'

const RootLayout = () => {
    return (
        <>
            <Header />
            <main className="h-screen">
                <Outlet />
            </main>
            <Footer />
        </>
    )
}
export default RootLayout
