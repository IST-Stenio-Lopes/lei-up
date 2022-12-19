import { PageTitle } from "../../components/PageTitle";
import { Theme } from "../../theme";
import * as Styled from './style';
import { StepProgress } from "./StepsProgress";
import { societyContract } from "./StepsProgress/quests/quests";
import { useEffect, useState, useMemo, useCallback } from "react";
import { FormQuiz } from "./FormQuiz";
import { FinishQuiz } from "./FinishQuiz";

export const QuestionnairePage: React.FC = () => {

    const [answers, setAnswers] = useState<string[]>([]);
    const [currentAnswerIndex, setCurrentAnswerIndex] = useState<number>(0)
    const [currentStep, setCurrentStep] = useState(0); //São as etapas que contem as questões

    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0); //representa o index da questão dentro do array da etapa

    const inputAnswer = useMemo(() => answers[currentAnswerIndex], [currentAnswerIndex])

    async function handleNext(v: string){
            let newAnswersArr = answers;
            newAnswersArr[currentAnswerIndex] = v;
           await setAnswers(newAnswersArr);

        if(societyContract[currentStep].length - 1 > currentQuestionIndex){

            setCurrentQuestionIndex((r) => r+1);
            setCurrentAnswerIndex((r) => r+1);
        }
        else{
            setCurrentStep((r) => r+1);
            setCurrentQuestionIndex(0);
            setCurrentAnswerIndex((r) => r+1);
        }
    }

    function handleBack(v: string){
        if(currentStep === 0 && currentQuestionIndex === 0){

        }else{
            if(currentQuestionIndex > 0){
                setCurrentQuestionIndex((r) => r-1);
                setCurrentAnswerIndex((r) => r-1);
            }
            else{
                if(currentStep > 0){
                    let a = currentStep;
                    setCurrentStep((r) => r-1);
                    setCurrentQuestionIndex(societyContract[a-1].length -1);
                    setCurrentAnswerIndex((r) => r-1);
                }
            }
        }

    }

    useEffect(() => {
        let a: string[] = [];
        for(let i= 0; i<societyContract.length; i++){
            for(let j = 0; j< societyContract[i].length; j++){
                a.push('')
            }
        }
        setAnswers(a)
    }, [societyContract])


    return(

        <Theme isLoginOrRegister={false} gradient>

            <PageTitle
                title="Realizar questionário"
                goBack={true}
            />
            <Styled.QuestionnairePageContainer>
                <StepProgress
                    currentStep={currentStep+1}
                    stepsQuantity={societyContract.length}
                /> 

                {
                   (currentStep < societyContract.length)?

                   (
                    <>
                        <Styled.QuestionnairePageQuestion>
                        {societyContract[currentStep][currentQuestionIndex].question}

                        </Styled.QuestionnairePageQuestion> 
                        <FormQuiz
                            initialValue={inputAnswer}
                            back={handleBack}
                            next={handleNext}
                        />

                    </>
                   )
                   :
                   (
                    <FinishQuiz/>
                   )


                }


            </Styled.QuestionnairePageContainer>
        
        </Theme>
    )
}