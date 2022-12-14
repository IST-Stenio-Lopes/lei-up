import { ReactNode } from "react"
import { LateralMenu } from "./components/LateralMenu"
import { TopMenu } from "./components/TopMenu"
import * as Styled from './style'

type Props = {
    children: ReactNode,
}

export const Menu: React.FC<Props> = ({children}) => {


    return(
        <Styled.MenuContainer>
            <TopMenu/>
            <LateralMenu/>
            <Styled.PageInsideMenuTheme>
                {children}    
            </Styled.PageInsideMenuTheme>
            
        </Styled.MenuContainer>
    )
}