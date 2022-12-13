import { Route, Routes } from "react-router-dom";

import { DashboardPage } from "../pages/dashboard";
import { LoginPage } from "../pages/login";
import { AuthRoutes } from "./auth.routes";

export const Router = () => {

    return (
        <Routes>
            <Route path="/dashboard/*" element={<div>Dashboard</div>} />
            <Route path="/*" element={<AuthRoutes />} />
    
        </Routes>
    )
}