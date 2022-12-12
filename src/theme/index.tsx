import { ReactNode } from "react";

import { ThemeContainer, ThemeDivider, ThemePositionLogin } from "./style";

// import { Container, Page } from "./style";

type Props = {
    children: ReactNode,
    isLoginOrRegister: boolean
}


export const Theme = ({ children }: Props) => {

    return (
        <ThemeContainer>
            <ThemePositionLogin>
                {children}
            </ThemePositionLogin>
     
        </ThemeContainer>
    
    )
}