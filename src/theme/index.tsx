import { ReactNode } from "react";

import { ThemeContainer, ThemeDivider, ThemePositionLogin } from "./style";

// import { Container, Page } from "./style";

type Props = {
    children: ReactNode,
    isLoginOrRegister: boolean
}


export const Theme = ({ children, isLoginOrRegister }: Props) => {

    return (
        <ThemeContainer>
            {
                isLoginOrRegister?

                (
                    <ThemePositionLogin>
                        {children}
                    </ThemePositionLogin>
                )
                :
                (
                    <ThemeDivider>
                        {children}
                    </ThemeDivider>
                )
            }
           
     
        </ThemeContainer>
    
    )
}