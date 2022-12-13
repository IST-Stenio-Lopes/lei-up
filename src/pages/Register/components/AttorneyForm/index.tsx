import { Form, Formik } from "formik"
import { useNavigate } from "react-router-dom";
import * as Yup from 'yup';

import { GenericButton } from "../../../../components/buttons/buttons";
import { PasswordInput } from "../../../../components/login/inputs/Password"
import { TextInput } from "../../../../components/login/inputs/Text"
import { QuestionAndRedirectLink } from "../../../login/components/QuestionAndRedirectLink";

interface IregisterAttorney {
    name: string,
    email: string,
    oab: string,
    password: string,
    repeatPassword: string
}
const attorneyInitialValues: IregisterAttorney ={
    name: '',
    email: '',
    oab: '',
    password: '',
    repeatPassword: ''
}


export const AttorneyForm: React.FC = () => {

    let navigate = useNavigate();
    const registerAttorneySchema = Yup.object().shape({
        name: Yup.string().required('O campo não pode estar vazio!'),
        email: Yup.string().email('O campo deve ser um email!').required('O campo não pode estar vazio!'),
        oab: Yup.string().required('O campo não pode estar vazio!'),
        password: Yup.string().required("deve ter uma senha!").min(7, "Deve conter ao menos 7 caracteres").matches(
            /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]/,
            'uma letra maiúscula e uma letra minúscula, ' +
            'um número e um caracter especial'
        ),
        repeatPassword: Yup.string().oneOf([Yup.ref('password')], 'Senha deve ser igual a anterior').required('O campo não pode estar vazio!')
    })

    return(

        <Formik
        initialValues={attorneyInitialValues}
        validationSchema={registerAttorneySchema}
        onSubmit={(values) => {console.log(values)}}
        validateOnChange={false}
        
    >{({values, errors, submitForm}) => (
        
        <Form style={{'display': 'flex', 'flexDirection': 'column'}}>
            <TextInput
                id="name"
                name="name"
                errorMsg={errors.name}
                title="Nome"
                type="text"
                value={!!values.name}
            />
            <TextInput
                id="email"
                name="email"
                errorMsg={errors.email}
                title="E-mail"
                type="text"
                value={!!values.email}
            />
            <TextInput
                id="oab"
                name="oab"
                errorMsg={errors.oab}
                title="OAB"
                type="text"
                value={!!values.oab}
            />
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

            <QuestionAndRedirectLink
                questionText="Esqueceu a senha? "
                linkText="Clique aqui"
                action={() => navigate('/')}
            />
            <GenericButton 
                widthPercent={100}
                heightPx={40}
                text={ 'Cadastrar'}
                action={() => submitForm()}
            />

        </Form>
    )}


    </Formik>
    )
}