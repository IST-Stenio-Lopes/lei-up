import { Form, Formik } from 'formik'
import { useState } from 'react'
import * as Yup from 'yup'

import { ReactComponent as LogoFullSize } from '../../assets/full-logo.svg'
import { GenericButton } from '../../components/buttons/buttons'
import { TextInput } from '../../components/login/inputs/Text'
import { Theme } from "../../theme"
import { SubTitleRegister, TitleRegister } from '../Register/style'
import { ModalSendEmail } from './components/ModalSendEmail'

interface IrecoveryPassword{
    email: string
}

const initialValues: IrecoveryPassword = {
    email: ''
}


export const RecoveryPasswordPage: React.FC = () => {

    const [showModal, setShowModal] = useState(false);

    const RecoveryPasswordSchema = Yup.object().shape({
        email: Yup.string().email('O campo deve ser um email!').required('O campo não pode estar vazio!'),
    })


    function handleSubmit(values: IrecoveryPassword){
        console.log(values);
        setShowModal(true);
    }

    return(
        <Theme isLoginOrRegister>
            <LogoFullSize style={{'alignSelf': 'center'}}/>
                {
                    showModal && <ModalSendEmail close={() => {setShowModal(false)}}/>
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
                validationSchema={RecoveryPasswordSchema}
                validateOnChange={false}
            >{({values, errors, submitForm}) => (

                <Form style={{'display': 'flex', 'flexDirection': 'column', 'marginTop': '36px'}}>
                    <TextInput
                        id="email"
                        name="email"
                        errorMsg={errors.email}
                        title="Usuário"
                        type="text"
                        value={!!values.email}
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