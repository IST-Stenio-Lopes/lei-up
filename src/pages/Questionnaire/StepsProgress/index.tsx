import { useMemo } from 'react';

import { BallStepProgress } from './BallStepProgress';
import { FinishBall } from './FinishBall';
import * as Styled from './style';

interface IstepProgress{
    stepsQuantity: number,
    currentStep: number
}

export const StepProgress: React.FC<IstepProgress> = ({currentStep, stepsQuantity}) => {




    const arr = useMemo(() => {
        const tempArr = [];

        for(let i =0; i< stepsQuantity; i++) {
            tempArr.push(i + 1);
        }

        return tempArr;
    },[stepsQuantity]);

    

    return(

        <Styled.LineContainer>
    
            
            {
                arr.map((e) => <BallStepProgress key={e} currentStep={currentStep} step={e}/>
                )
            }
            <FinishBall finish={currentStep > stepsQuantity}/>
        
        </Styled.LineContainer>
    )
}