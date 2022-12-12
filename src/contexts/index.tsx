import { ReactNode } from "react";

import { AuthProvider } from "./auth";

type AppProvider = {
    children: ReactNode
}


const AppProvider: React.FC<AppProvider> = ({ children }) => {


    return (
        <AuthProvider>
            {children}
        </AuthProvider>
    )

}

export default AppProvider