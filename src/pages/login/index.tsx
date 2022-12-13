import { Form, Formik } from "formik"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import * as Yup from 'yup'

import { ReactComponent as LogoFullSize } from '../../assets/full-logo.svg'
import { GenericButton } from "../../components/buttons/buttons"
import { PasswordInput } from "../../components/login/inputs/Password"
import { TextInput } from "../../components/login/inputs/Text"
import { Theme } from "../../theme"
import { QuestionAndRedirectLink } from "./components/QuestionAndRedirectLink"
import { SelectUser } from "./components/SelectUser"
import { SignInWithGoogleButton } from "./components/SignInWithGoogleButton"
import * as Styled from './style';

interface Ilogin{
    user: string,
    password: string
}

const initialValues: Ilogin = {
    user: '',
    password: ''
}

export const LoginPage: React.FC = () => {

    const [isClient, setIsClient] = useState<boolean>();
    let navigate = useNavigate();


    function handleSubmitLoginClient(value: Ilogin){
        console.log(value)
    }

    const LoginSchema = Yup.object().shape({
        user: Yup.string().email('O campo deve ser um email!').required('O campo não pode estar vazio!'),
        password: Yup.string().min(8, 'Deve conter ao menos 8 caracteres').required('O campo não pode estar vazio!')
    
    })

    return(
        <Theme isLoginOrRegister>
            <LogoFullSize style={{'alignSelf': 'center'}}/>

            <Formik
                initialValues={initialValues}
                validationSchema={LoginSchema}
                onSubmit={(values) => {console.log(values)}}
                validateOnChange={false}
                
            >{({values, errors, submitForm}) => (
                
                <Form style={{'display': 'flex', 'flexDirection': 'column'}}>
                    
                    <SelectUser setIsClientProp={setIsClient}/>
                    <TextInput
                        id="user"
                        name="user"
                        errorMsg={errors.user}
                        title="Usuário"
                        type="text"
                        value={!!values.user}
                    />
                    <PasswordInput
                        id="password"
                        name="password"
                        errorMsg={errors.password}
                        title="Senha"
                        type="password"
                        value={!!values.password}
                    />
                    <QuestionAndRedirectLink
                        questionText="Esqueceu a senha? "
                        linkText="Clique aqui"
                        action={() => navigate('/')}
                    />
                    <GenericButton 
                        widthPercent={100}
                        heightPx={40}
                        text={ 'Entrar'}
                        action={() => submitForm()}
                    />

                </Form>
            )}

            </Formik>

            <Styled.JustAnOrToDivider>
                Ou
            </Styled.JustAnOrToDivider>

            <SignInWithGoogleButton/>

            <QuestionAndRedirectLink
                questionText="Não tem login? "
                linkText="Cadastre-se"
                action={() => navigate('/register')}
            />

        </Theme>
    )
}