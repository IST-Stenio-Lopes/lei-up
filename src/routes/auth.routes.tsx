import { Route, Routes } from "react-router-dom";

import { DashboardPage } from "../pages/dashboard";
import { LoginPage } from "../pages/login";

export const AuthRoutes = () => {

    return (
        <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/sinup" element={<div>Sinup</div>} />
            <Route path="/recovery" element={<div>Recovey</div>} />
            <Route path="/forgot" element={<div>Forgot</div>} />
    
        </Routes>
    )
}