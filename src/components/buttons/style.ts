import styled from "styled-components";


interface IgenericButtonProps{
    widthPx?: number,
    heightPx?: number,
    widthPercent?: number,
    heightPercent?: number
}

interface ISelectLoginButtonProps{
    widthPx?: number,
    heightPx?: number,
    widthPercent?: number,
    heightPercent?: number,
    isClient: boolean
}

export const StyledGenericButton = styled.div<IgenericButtonProps>` //botão generico
    width: ${(e: IgenericButtonProps) => e.widthPx}px;
    width: ${(e: IgenericButtonProps) => e.widthPercent}%;
    height: ${(e: IgenericButtonProps) => e.heightPx}px;
    height: ${(e: IgenericButtonProps) => e.heightPercent}%;
    background-color: #4B4B87;
    font-size: 14px;
    font-weight: 700;
    color: white;
    border-radius: 4px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const StyledSelectLoginButton = styled.div<ISelectLoginButtonProps>` //botão para escolher entre login de cliente ou advogado
    width: ${(e: IgenericButtonProps) => e.widthPx}px;
    width: ${(e: IgenericButtonProps) => e.widthPercent}%;
    height: ${(e: IgenericButtonProps) => e.heightPx}px;
    height: ${(e: IgenericButtonProps) => e.heightPercent}%;
    background-color: ${(e: ISelectLoginButtonProps) => e.isClient? '#4B4B87' : '#FFF'};
    font-size: 14px;
    font-weight: 700;
    color: ${(e: ISelectLoginButtonProps) => e.isClient? '#FFF' : '#878A8C'};

    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;

`