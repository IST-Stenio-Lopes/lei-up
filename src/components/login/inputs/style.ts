import { Field } from "formik";
import styled from "styled-components";

interface IinputProps {
    hasError: boolean;
}
interface ItextControllProps{
    selected: boolean;
    hasValue: boolean;
    hasError: boolean;
}

export const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 18px;
`

export const InputFieldContainer = styled.div<IinputProps>`
    width: calc(100% - 38px);
    height: 46px;
    border: 1px solid;
    border-color: ${(e: IinputProps) => e.hasError? '#BF464D' : ' #4B4B87'};
    border-radius: 4px;
    padding-left: 19px;
    padding-right: 19px;
    display: flex;
    align-items: center;
    flex-direction: row;
    position: relative;
`

export const ErrorMsg = styled.p`
    color: #BF464D;
    font-size: 14px;
    font-weight: 500;
    line-height: 16px;
    margin: 0;
`

export const TextInput = styled.p<ItextControllProps>`
    color: ${(e: ItextControllProps) => e.selected? '#4B4B87' : '#878A8C'};
    color: ${(e: ItextControllProps) => e.hasValue && '#4B4B87'};
    color: ${(e: ItextControllProps) => e.hasError && '#BF464D'};
    background-color: white;
    font-size: 14px;
    font-size: ${(e: ItextControllProps) => (e.selected || e.hasValue) && '12px'};
    font-weight: 600;
    margin-top: ${(e: ItextControllProps) => e.selected? '-35px' : ''};
    margin-top: ${(e: ItextControllProps) => e.hasValue && '-35px'};
    transition: 0.3s;



`

export const InputTextFormikFieldStyled = styled(Field)`
    outline: 0;
    width: calc(100% - 40px);
    position: absolute;
    background-color: transparent;
    border: none;
    left: 19px;
    color: #4B4B87;
    font-weight: 600;

    ::placeholder{
    color: #878A8C;
    }

`
export const InputPassowordFormikFieldStyled = styled(Field)`
    outline: 0;
    width: calc(100% - 63px);
    position: absolute;
    background-color: transparent;
    border: none;
    left: 19px;
    color: #4B4B87;
    font-weight: 600;

    ::placeholder{
    color: #878A8C;
    }

`
