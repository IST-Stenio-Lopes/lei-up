import { Form, Formik } from "formik"
import { useState } from "react"
import { ReactComponent as LogoFullSize} from '../../assets/full-logo.svg'
import { GenericButton } from "../../components/buttons/buttons"
import { PasswordInput } from "../../components/login/inputs/password"
import { TextInput } from "../../components/login/inputs/text"
import { Theme } from "../../theme"
import { SelectUser } from "./components/SelectUser"
import * as Yup from 'yup'

interface Ilogin{
    user: string,
    password: string
}

const initialValues: Ilogin = {
    user: '',
    password: ''
}

export const LoginPage: React.FC = () => {

    const [isClient, setIsClient] = useState<boolean>()


    function handleSubmitLoginClient(value: Ilogin){
        console.log(value)
    }

    const LoginSchema = Yup.object().shape({
        user: Yup.string().email('O campo deve ser um email!').required('O campo não pode estar vazio!'),
        password: Yup.string().min(8, 'Deve conter ao menos 8 caracteres').required('O campo não pode estar vazio!')
    
    })

    function handleSubmitLoginAttorney(){
        
    }


    return(
        <Theme isLoginOrRegister>
            <Formik
                initialValues={initialValues}
                validationSchema={LoginSchema}
                onSubmit={(values) => {console.log(values)}}
                validateOnChange={false}
                
            >{({values, errors, submitForm}) => (
                
                <Form>
                    <LogoFullSize/>
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

                <GenericButton 
                    widthPercent={100}
                    heightPx={40}
                    text={ 'Entrar'}
                    action={() => submitForm()}
                />

                </Form>
            )}

            </Formik>



        </Theme>
    )
}