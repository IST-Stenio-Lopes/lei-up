import * as Styled from './style'

interface IseeQuestion{
    question: string,
    answer: string
}


export const SeeQuestion: React.FC<IseeQuestion> = ({question, answer}) => {


    return(
        <Styled.SeeQuestionContainer>
            <Styled.SeeQuestionAsk>
                {question}
            </Styled.SeeQuestionAsk>
            <Styled.SeeQuestionAnswer>
                {answer}
            </Styled.SeeQuestionAnswer>

        </Styled.SeeQuestionContainer>
    )
}