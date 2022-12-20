import { useLocation } from "react-router-dom";
import { PageTitle } from "../../components/PageTitle";
import { Theme } from "../../theme"
import { EditQuestion } from "./EditQuestion";
import { SeeContractView } from "./SeeContractView";
import { SeeQuestion } from "./SeeQuestion";
import * as Styled from './style';
import { societyContract } from "../Questionnaire/StepsProgress/quests/quests";
import { useCallback } from "react";



export const ContractView: React.FC = () => {

    const location = useLocation();

    const answers = ['resposta 1', 'resposta 2', 'resposta 3', 'resposta 4', 'resposta 5', 'resposta 6',
        'resposta 7', 'resposta 8', 'resposta 9', 'resposta 10', 'resposta 11', 'resposta 12',
        'resposta 13', 'resposta 14', 'resposta 15'
    ];

    //para pegar o valor passado!

    const listQuestions = useCallback((a = 0) => (
        location.state.edit === false?(
            societyContract.map((stage) => (
                stage.map((question) => (

                    <SeeQuestion
                        key={question.id}
                        question={question.question}
                        answer={answers[a++]}
                    />
                    
                ))
            )))
            :
                (
                    societyContract.map((stage) => (
                        stage.map((question) => (
                            <EditQuestion
                                key={question.id}
                                id={question.id}
                                question={question.question}
                                answer={answers[a++]}
                            />
                            
                        ))
                    ))
                )
            

        
    ), [location.state.edit]);

    return(
        <Theme isLoginOrRegister={false}>
            <Styled.ContractViewContainer>

                <PageTitle
                    title={location.state.edit? 'Solicitar alterações' : 'Visualizar contrato'}
                    goBack={true}
                />

                <SeeContractView/>
                <Styled.ContractViewSimpleText>
                    Dados da empresa
                </Styled.ContractViewSimpleText>

                {listQuestions()}

            </Styled.ContractViewContainer>

            
        </Theme>
    )
}