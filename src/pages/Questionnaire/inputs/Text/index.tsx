import { useField} from "formik";
import { useState, useCallback, useEffect, useMemo } from "react";
import { string } from "yup";
import * as Styled from "./style";

interface IinputText {
    title: string,
    errorMsg: string | undefined,
    type: 'text' | 'password',
    name: string,
    id: string,
    initialValue?: string
    clear?: boolean
}


export const QuizTextInput: React.FC<IinputText>= ({errorMsg, id, name, title, type, initialValue, clear}) => {

    const [field, meta, helpers] = useField(name);
    const { setValue } = helpers;
  
    const [focused, setFocused] = useState(false);


    const handleInputBlur = (event: any) => {
        setFocused(false);
    };

    const handleInputFocus = (event: any) => {
        setFocused(true);
    }

    const InputCallback = useCallback(()=>(
        
        <Styled.InputTextFormikFieldStyled
        className="text-area"
        id={id}
        name={name}
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        as='textarea'
        onChange={(v) => {setValue(v.target.value)}}
        defaultValue={initialValue}
    />

    ), [initialValue])


    useEffect(()=>{
        initialValue && setValue(initialValue)
    }, [initialValue])


    return(
        <Styled.InputContainer>
            {initialValue}
            <Styled.InputFieldContainer
                hasError={!!errorMsg}
            >

            <Styled.TextInput
                selected={focused}
                hasValue={!!field.value}
                hasError={!!errorMsg}
            >
                    {title}
            </Styled.TextInput>
            {<InputCallback />}

        </Styled.InputFieldContainer>
        <Styled.ErrorMsg>
            {errorMsg}
        </Styled.ErrorMsg>

        </Styled.InputContainer>
       
    )

}