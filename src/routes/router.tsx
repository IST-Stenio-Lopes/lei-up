import { Route, Routes } from "react-router-dom";

import { DashboardPage } from "../pages/dashboard";
import { LoginPage } from "../pages/login";

export const Router = () => {

    return (
        <Routes>
            <Route path="" element={<LoginPage />} />
    
        </Routes>
    )
}