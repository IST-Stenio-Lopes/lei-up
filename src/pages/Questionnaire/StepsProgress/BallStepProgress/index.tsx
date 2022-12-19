import * as Styled from './style'

interface IballStepProgress{
    step: number,
    currentStep: number
}

export const BallStepProgress: React.FC<IballStepProgress> = ({step, currentStep}) => {


    return(
        <Styled.BallStepContainer active={step === currentStep}>
            {
                step === currentStep && step
            }
        </Styled.BallStepContainer>
    )
}