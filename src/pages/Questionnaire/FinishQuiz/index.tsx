import * as Styled from './styled';
import {ReactComponent as Logo} from '../../../components/Menu/assets/single-rocket.svg';
import { useNavigate } from 'react-router-dom';



export const FinishQuiz: React.FC = () => {

    let navigate = useNavigate()


    return(
        <Styled.FinishQuizContainer>
            <Styled.FinishQuizLogoContainer>
                <Logo/>
                
            </Styled.FinishQuizLogoContainer>
            <Styled.FisinhQuizText>
                Parabéns! Você concluiu o questionário para formulação do contrato que será enviado para a análise.
                O prazo é de 90 dias, enviaremos um e-mail avisando quando for concluído.
            </Styled.FisinhQuizText>

            <Styled.FisinhQuizGoBackHomeButton onClick={() => navigate('/')}>
                Voltar para página inicial
            </Styled.FisinhQuizGoBackHomeButton>
        </Styled.FinishQuizContainer>
    )
}

