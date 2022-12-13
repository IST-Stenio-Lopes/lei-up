import { Form, Formik } from "formik";
import React from "react";
import { useNavigate } from "react-router-dom";
import * as Yup from 'yup'

import { GenericButton } from "../../../../components/buttons/buttons";
import { PasswordInput } from "../../../../components/login/inputs/Password";
import { TextInput } from "../../../../components/login/inputs/Text";
import { QuestionAndRedirectLink } from "../../../login/components/QuestionAndRedirectLink";

interface IregisterClient {
    businessName: string,
    email: string,
    cnpj: string,
    password: string,
    repeatPassword: string
}

const clientInitialValues: IregisterClient = {
    businessName: '',
    email: '',
    cnpj: '',
    password: '',
    repeatPassword: ''
}

export const ClientForm: React.FC =() => {

    let navigate = useNavigate();


    const registerClientSchema = Yup.object().shape({
        businessName: Yup.string().required('O campo não pode estar vazio!'),
        email: Yup.string().email('O campo deve ser um email!').required('O campo não pode estar vazio!'),
        cnpj: Yup.string().required('O campo não pode estar vazio!').min(14, 'CNPJ deve possuir 14 números').max(14, 'CNPJ deve possuir 14 números'),
        password: Yup.string().required("deve ter uma senha!").min(7, "Deve conter ao menos 7 caracteres").matches(
            /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]/,
            'uma letra maiúscula e uma letra minúscula, ' +
            'um número e um caracter especial'
        ),
        repeatPassword: Yup.string().oneOf([Yup.ref('password')], 'Senha deve ser igual a anterior').required('O campo não pode estar vazio!')
    })


    return(
        <Formik
                initialValues={clientInitialValues}
                validationSchema={registerClientSchema}
                onSubmit={(values) => {console.log(values)}}
                validateOnChange={false}
                
            >{({values, errors, submitForm}) => (
                
                <Form style={{'display': 'flex', 'flexDirection': 'column'}}>
                    
                    <TextInput
                    id="businessName"
                    name="businessName"
                    errorMsg={errors.businessName}
                    title="Nome da empresa"
                    type="text"
                    value={!!values.businessName}
                />
                <TextInput
                    id="email"
                    name="email"
                    errorMsg={errors.email}
                    title="E-mail pessoal"
                    type="text"
                    value={!!values.email}
                />
                <TextInput
                    id="cnpj"
                    name="cnpj"
                    errorMsg={errors.cnpj}
                    title="CNJP"
                    type="text"
                    value={!!values.cnpj}
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