// src/components/ResponsiveLayout.jsx
import React from "react";

import SidebarComponent from "./SidebarComponent";

const ResponsiveLayout = ({ children }) => {
    return (
        <div className="layout">

            <SidebarComponent />
            <main className="content">{children}</main>
        </div>
    );
};

export default ResponsiveLayout;
