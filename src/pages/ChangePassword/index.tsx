import { Form, Formik } from 'formik'
import { useState } from 'react'
import * as Yup from 'yup'

import { ReactComponent as LogoFullSize } from '../../assets/full-logo.svg'
import { GenericButton } from '../../components/buttons/buttons'
import { PasswordInput } from '../../components/login/inputs/Password'
import { TextInput } from '../../components/login/inputs/Text'
import { Theme } from "../../theme"
import { SubTitleRegister, TitleRegister } from '../Register/style'
import { ModalChangePassword } from './components/ModalChangePassword'

interface IchangePassword{
    password: string,
    repeatPassword: string
}

const initialValues: IchangePassword = {
    password: '',
    repeatPassword: ''
}


export const ChangePasswordPage: React.FC = () => {

    const [showModal, setShowModal] = useState(false);

    const ChangePasswordSchema = Yup.object().shape({
        password: Yup.string().required("deve ter uma senha!").min(7, "Deve conter ao menos 7 caracteres").matches(
            /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]/,
            'uma letra maiúscula e uma letra minúscula, ' +
            'um número e um caracter especial'
        ),
        repeatPassword: Yup.string().oneOf([Yup.ref('password')], 'Senha deve ser igual a anterior').required('O campo não pode estar vazio!')
    })


    function handleSubmit(values: IchangePassword){
        console.log(values);
        setShowModal(true);
    }



    return(
        <Theme isLoginOrRegister>
        <LogoFullSize style={{'alignSelf': 'center'}}/>
            {
                showModal && <ModalChangePassword close={() => {setShowModal(false)}}/>
            }
            
        <TitleRegister>
            Recuperar a senha
        </TitleRegister>
        <SubTitleRegister>
            Digite abaixo seu e-mail e enviaremos as instruções  para alteração de senha
        </SubTitleRegister>


        <Formik
            initialValues={initialValues}
            onSubmit={(values) => handleSubmit(values)}
            validationSchema={ChangePasswordSchema}
            validateOnChange={false}
        >{({values, errors, submitForm}) => (

            <Form style={{'display': 'flex', 'flexDirection': 'column', 'marginTop': '36px'}}>
                <PasswordInput
                    id="password"
                    name="password"
                    errorMsg={errors.password}
                    title="Senha"
                    type="password"
                    value={!!values.password}
                />
                <PasswordInput
                    id="repeatPassword"
                    name="repeatPassword"
                    errorMsg={errors.repeatPassword}
                    title="Repita a senha"
                    type="password"
                    value={!!values.repeatPassword}
                />

                <GenericButton 
                    widthPercent={100}
                    heightPx={40}
                    text={'Enviar'}
                    action={() => submitForm()}
                />
            </Form>

        )}


        </Formik>

    </Theme>
    )
}