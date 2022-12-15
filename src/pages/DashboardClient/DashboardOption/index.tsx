import { CaretRight, Plus } from 'phosphor-react'

import * as Styled from './style'

interface IdashboardOption{
    isNewContract?: boolean,
    text: string,
    action?: () => void
}


export const DashboardOption: React.FC<IdashboardOption> = ({isNewContract, text, action}) => {

    return(
        <Styled.DashBoardOptionContainer isNewContract={isNewContract} onClick={action}>
            <Styled.DashBoardOptionText isNewContract={isNewContract}>
                {text}
            </Styled.DashBoardOptionText>

            <Styled.DashBoardOptionIconContainer>
                {
                    isNewContract ?
                    (<Plus  width={18} height={18} color={'#FFFFFF'} />)
                    :
                    (<CaretRight  width={18} height={18} color={'#4B4B87'} />)
                }

            </Styled.DashBoardOptionIconContainer>
            
        </Styled.DashBoardOptionContainer>
    )
}