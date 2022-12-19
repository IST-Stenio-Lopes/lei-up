import { Check } from 'phosphor-react'

import * as Styled from './style'

interface IfinishBall{
    finish: boolean
}

export const FinishBall: React.FC<IfinishBall> = ({finish}) => {

    return(
        <Styled.FinishBallStepContainer active={finish}>
            {
                finish && <Check color='white' width={25} height={25} weight={'bold'}/>
            }
            
        </Styled.FinishBallStepContainer>
    )
}