import * as Styled from './style';


interface IquestionAndRedirectLink{
    questionText: string,
    linkText: string,
    action(): void
}

export const QuestionAndRedirectLink: React.FC<IquestionAndRedirectLink> = ({questionText, linkText, action}) => {

    return(
        <Styled.QuestionAndRedirectLinkContainer>
            <Styled.Question>
                {questionText}
                <Styled.RedirectLink onClick={() => action()}>
                    {linkText}
                </Styled.RedirectLink>
            </Styled.Question>
        </Styled.QuestionAndRedirectLinkContainer>
    )
}