import { Form, Formik } from 'formik'
import { useCallback, useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import * as Yup from 'yup';

import { ReactComponent as LogoFullSize } from '../../assets/full-logo.svg'
import { GenericButton } from '../../components/buttons/buttons'
import { PasswordInput } from '../../components/login/inputs/Password'
import { TextInput } from '../../components/login/inputs/Text'
import { Theme } from '../../theme'
import { QuestionAndRedirectLink } from '../login/components/QuestionAndRedirectLink'
import { SelectUser } from '../login/components/SelectUser'
import { SignInWithGoogleButton } from '../login/components/SignInWithGoogleButton';
import { JustAnOrToDivider } from '../login/style';
import { AttorneyForm } from './components/AttorneyForm';
import { ClientForm } from './components/ClientForm';
import * as Styled from './style'

const RegisterPage: React.FC = () => {

    const [isClient, setIsClient] = useState<boolean>();
    let navigate = useNavigate()
    
    return(
        <Theme isLoginOrRegister>
            <LogoFullSize style={{'alignSelf': 'center', 'width': '50%'}}/>
            
            <Styled.TitleRegister>
                Criar sua conta
            </Styled.TitleRegister>
            <Styled.SubTitleRegister>
                Para criar sua conta precisamos de algumas informações.
            </Styled.SubTitleRegister>
            <SelectUser setIsClientProp={setIsClient}/>

            {
                isClient? <ClientForm/> : <AttorneyForm/>
            }
            <JustAnOrToDivider>
                Ou
            </JustAnOrToDivider>

            <SignInWithGoogleButton/>

            <QuestionAndRedirectLink
                questionText="Já possui conta?"
                linkText="Login"
                action={() => navigate('/')}
            />


        </Theme>
    )
}

export default RegisterPage