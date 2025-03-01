import { Outlet } from "react-router-dom";
import NavbarComponent from '../components/NavbarComponent';

const Layout = () => {
    return (
        <div className="special-bg min-h-screen flex flex-col">
            {/* Navbar คงที่ */}
            <NavbarComponent />

            {/* เนื้อหาด้านล่างเปลี่ยนตาม Route */}
            <main className="pt-16">
                <Outlet />
            </main>
        </div>
    );
};

export default Layout;
