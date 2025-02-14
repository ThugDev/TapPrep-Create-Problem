import { Outlet } from 'react-router-dom'
import Header from './header'
import Footer from './footer'

const RootLayout = () => {
    return (
        <>
            <Header />
            <div className="h-[calc(100vh-50px)]">
                <Outlet />
            </div>
            <Footer />
        </>
    )
}
export default RootLayout
