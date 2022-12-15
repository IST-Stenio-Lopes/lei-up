import { useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/auth";

import { SettingsPage } from "../pages/SettingsPage";

export const SettingsRoutes = () => {

    
    const {stateAuth} = useAuth();
    let navigate = useNavigate();

    useEffect(() => {
        !stateAuth.userType && navigate('/')
    },[])


    return (
        <Routes>
            <Route path="/" element={<SettingsPage />} />
        </Routes>
    )
}