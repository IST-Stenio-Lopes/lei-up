import { Route, Routes } from "react-router-dom";
import { ChangePasswordPage } from "../pages/ChangePassword";

import { LoginPage } from "../pages/login";
import { RecoveryPasswordPage } from "../pages/RecoveryPassword";
import RegisterPage from "../pages/Register";

export const AuthRoutes = () => {

    return (
        <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage/>} />
            <Route path="/recovery" element={<RecoveryPasswordPage/>} />
            <Route path="/changepassword" element={<ChangePasswordPage/>} />
    
        </Routes>
    )
}