import { Form, Formik, useField } from 'formik';
import * as Styled from './style';
import * as Yup from 'yup';
import { QuizTextInput } from '../inputs/Text/index';
import { CaretLeft, CaretRight } from 'phosphor-react';
import { useRef, useState } from 'react';

interface IformQuiz{
    initialValue: string,
    back: (v: string) => void,
    next: (v: string) => void
}




export const FormQuiz: React.FC<IformQuiz> = ({initialValue, back, next}) => {

    const [clearField, setClearField] = useState(false);
    const formRef = useRef(null)


    const LoginSchema = Yup.object().shape({
        answer: Yup.string().required('O campo não pode estar vazio!'),
    })


    function HandleSubmit(v: string){
        console.log(v)
    }

    
    function HandleNext(v: string){
        next(v);
        
    }



    return(
       
        <Styled.QuizContainer>
            <Formik
                initialValues={{answer: initialValue}}
                onSubmit={(values) => HandleSubmit(values.answer)}
                validationSchema={LoginSchema}
                validateOnChange={false}
                innerRef={formRef}
                
            >{({values, errors, initialValues}) =>(
                <Form style={{'display': 'flex', 'flexDirection': 'column', 'width': '100%'}}>
                    <QuizTextInput
                        id='answer'
                        name='answer'
                        errorMsg={errors.answer}
                        title=''
                        type="text"
                        initialValue={initialValue}
                        clear={clearField}
                        // value={!!values.answer}
                    />

                    <Styled.ButtonsQuizContainer>
                        <Styled.ButtonBackQuizContainer
                            onClick={() => {back(values.answer); setClearField(!clearField)}}
                        >
                            Anterior
                            <CaretLeft
                             color="#6C6CBB"
                             width={24}
                             height={24}
                             style={{
                                 'position': 'absolute',
                                 'left': '9px'
                             }}
                            />
                        </Styled.ButtonBackQuizContainer>
                        <Styled.ButtonNextQuizContainer

                            onClick={() => {HandleNext(values.answer);setClearField((r) => !r)}}
                        >
                            Próxima
                            <CaretRight 
                                color="white"
                                width={24}
                                height={24}
                                style={{
                                    'position': 'absolute',
                                    'right': '9px'
                                }}
                            />
                        </Styled.ButtonNextQuizContainer>
                    </Styled.ButtonsQuizContainer>
                </Form>  
                )}


                
                
            </Formik>
        </Styled.QuizContainer>
    )
}