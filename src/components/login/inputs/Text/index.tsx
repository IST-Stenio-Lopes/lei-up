import { Field, Form, Formik } from "formik";
import { useState } from "react";

import * as Styled from "./style"

interface IinputText {
    title: string,
    errorMsg: string | undefined,
    type: 'text' | 'password',
    name: string,
    id: string,
    value: boolean
}


export const TextInput: React.FC<IinputText>= ({errorMsg, id, name, title, type, value}) => {

    const [focused, setFocused] = useState(false);


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
            <Styled.InputTextFormikFieldStyled
                id={id}
                name={name}
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
                type={type}
            />
        </Styled.InputFieldContainer>
        <Styled.ErrorMsg>
            {errorMsg}
        </Styled.ErrorMsg>

        </Styled.InputContainer>
       
    )

}