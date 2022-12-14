import { Route, Routes } from "react-router-dom";

import { DashboardPage } from "../pages/Dashboard";
import { LoginPage } from "../pages/login";
import { AuthRoutes } from "./auth.routes";
import { DashboardRoutes } from "./dashboard.routes";
import { SettingsRoutes } from "./settings.routes";

export const Router = () => {

    return (
        <Routes>
            <Route path="/dashboard/*" element={<DashboardRoutes/>} />
            <Route path="/settings/*" element={<SettingsRoutes/>}/>
            <Route path="/*" element={<AuthRoutes />} />
    
        </Routes>
    )
}