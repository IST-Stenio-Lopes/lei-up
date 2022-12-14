import { ReactNode } from "react";
import { Menu } from "../components/Menu";
import { PurpleTheme } from "./PurplePageTheme";
import * as Styled from "./style";

type Props = {
    children: ReactNode,
    isLoginOrRegister: boolean,
    gradient?: boolean
}


export const Theme = ({ children, isLoginOrRegister, gradient = true }: Props) => {

    return (
        <Styled.ThemeContainer>
                {
                isLoginOrRegister?

                (
                    <Styled.ThemePositionLogin>
                        {children}
                    </Styled.ThemePositionLogin>
                )
                :
                (
                    <Styled.ThemeDivider>
                        <PurpleTheme>
                            <Menu>

                            {children}  
                            
                            </Menu>
                            {
                                gradient && <Styled.PurpleThemePageGradient/>   
                            }
                        
                        </PurpleTheme>
                        
                        
                    </Styled.ThemeDivider>
                )
            }
     
        </Styled.ThemeContainer>
    
    )
}