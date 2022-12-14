import { SignOut } from "phosphor-react";

import { LateralMenuOptionContainer } from "../OptionMenu/style"
import * as Styled from './style'

export const Exit: React.FC = () => {

    return(

        <LateralMenuOptionContainer 
            active={false}
            style={{'bottom': '130px', 'position': 'absolute'}}
            onClick={() => alert('Quando tiver implementada a função, você vai sair do sistema!')}
        
        >
            <SignOut style={{
                'minWidth': '30px',
                'minHeight': '30px',
                'color': '#6C6CBB',
                }}/>
            <Styled.ExitText>
                Sair
            </Styled.ExitText>
        </LateralMenuOptionContainer>
    )
}