import { Outlet } from 'react-router-dom'
import Header from './header'
import Footer from './footer'

const RootLayout = () => {
    return (
        <div className="flex flex-col h-screen">
            <Header />
            <main className="flex-1">
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}
export default RootLayout
