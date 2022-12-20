import { useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";

import { useAuth } from "../contexts/auth";
import { ContractPage } from "../pages/Contract";
import { ContractView } from "../pages/Contract-View";
import { DashboardAttorneyPage } from "../pages/DashboardAttorney";
import { DashboardClientPage } from "../pages/DashboardClient";
import { QuestionnairePage } from "../pages/Questionnaire";

export const DashboardRoutes = () => {

    const {stateAuth} = useAuth();
    let navigate = useNavigate();

    useEffect(() => {
        !stateAuth.userType && navigate('/')
    },[])


    return (
        <Routes>

            <Route path="/" element={stateAuth.userType === 'client'? <DashboardClientPage /> : <DashboardAttorneyPage/>} />
            <Route path="/quiz" element={stateAuth.userType === 'client'? <QuestionnairePage /> : <DashboardAttorneyPage/>} />
            <Route path="/contract/:contractId" element={stateAuth.userType === 'client'? <ContractPage /> : <ContractPage/>} />
            <Route path="/contractview/:contractName" element={stateAuth.userType === 'client'? <ContractView /> : <DashboardAttorneyPage/>} />
      
    
        </Routes>
    )
}