import { Route, Routes } from "react-router-dom";

import { DashboardPage } from "../pages/dashboard";

export const Router = () => {

    return (
        <Routes>
            <Route path="" element={<DashboardPage />} />
    
        </Routes>
    )
}