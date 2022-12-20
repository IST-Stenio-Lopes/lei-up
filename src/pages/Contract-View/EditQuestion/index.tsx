import { PencilSimple } from 'phosphor-react'
import { useNavigate } from 'react-router-dom'
import * as Styled from './styled'

interface Iedituestion{
    question: string,
    answer: string,
    id: string
}


export const EditQuestion: React.FC<Iedituestion> = ({question, answer, id}) => {

    let navigate = useNavigate()

    return(
        <Styled.EditQuestionContainer>
            <Styled.EditQuestionButtonContainer>
                <PencilSimple color='#878A8C' size={22}/>
            </Styled.EditQuestionButtonContainer>
            <Styled.EditQuestionAsk>
                {question}
            </Styled.EditQuestionAsk>

            <Styled.EditQuestionAnswer>
                {answer}
            </Styled.EditQuestionAnswer>
        </Styled.EditQuestionContainer>
    )
}
