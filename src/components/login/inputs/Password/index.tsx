import { Field, Form, Formik } from "formik";
import { useEffect, useState } from "react";

import { ReactComponent as Invisible } from '../assets/invisible.svg';
import { ReactComponent as Visible } from '../assets/visible.svg';
import * as Styled from "./style"

interface IinputText {
    title: string,
    errorMsg: string | undefined,
    type: 'text' | 'password',
    name: string,
    id: string,
    value: boolean
}


export const PasswordInput: React.FC<IinputText>= ({errorMsg, id, name, title, type, value}) => {

    const [focused, setFocused] = useState(false);
    const [isVisible, setIsVisible] = useState(true);


    useEffect(() => {
        if(type === 'password'){
            setIsVisible(false)
        }
    }, [type])


    const handleInputBlur = (event: any) => {
        setFocused(false);
    };

    const handleInputFocus = (event: any) => {
        setFocused(true);
    }

    return(
        <Styled.InputContainer>
            <Styled.InputFieldContainer
                hasError={!!errorMsg}
            >

            <Styled.TextInput
                selected={focused}
                hasValue={value}
                hasError={!!errorMsg}
            >
                    {title}
            </Styled.TextInput>
            <Styled.InputPassowordFormikFieldStyled
                id={id}
                name={name}
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
                type={!isVisible? 'password' : 'text'}
            />

            {
                isVisible?
                 <Invisible
                    style={{'right': '10px', 'position': 'absolute', 'cursor': 'pointer'}}
                    onClick={() => {setIsVisible(false)}}
                />
                :
               <Visible
                    style={{'right': '10px', 'position': 'absolute', 'cursor': 'pointer'}}
                    onClick={() => {setIsVisible(true)}}
                />
            }
            
        </Styled.InputFieldContainer>
        <Styled.ErrorMsg>
            {errorMsg}
        </Styled.ErrorMsg>

        </Styled.InputContainer>
       
    )

}