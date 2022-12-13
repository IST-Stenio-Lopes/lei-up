import GoogleIcon from './assets/googleIcon.svg';
import * as Styled from './style';

export const SignInWithGoogleButton: React.FC = () => {

    return(
        <Styled.SignInWithGoogleButtonContainer>
            <img src={GoogleIcon}/>
            <p>Login com o Google</p>
        </Styled.SignInWithGoogleButtonContainer>
    )
}