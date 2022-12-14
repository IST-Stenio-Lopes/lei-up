import { ReactNode } from "react"
import * as Styled from './style';

type Props = {
    children: ReactNode,
    gradient?: boolean
}



export const PurpleTheme: React.FC<Props> = ({children, gradient}) => {

    return(
        <Styled.PurpleThemePageContainer>
            {children}
        </Styled.PurpleThemePageContainer>
    )
}


