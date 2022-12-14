import { Route, Routes } from "react-router-dom";

import { DashboardPage } from "../pages/Dashboard";

export const DashboardRoutes = () => {

    return (
        <Routes>
            <Route path="/" element={<DashboardPage />} />
      
    
        </Routes>
    )
}