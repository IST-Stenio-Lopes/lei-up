import styled from 'styled-components';

export const ThemeContainer = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

`

export const ThemePositionLogin = styled.div`
    min-width: 312px;
    width: 100%;
    display: flex;
    flex-direction: column;
    flex: 1;
    max-width: 500px;
    margin-top: 50px;
`

export const ThemeDivider = styled.div`
    height: 100%;
    margin-top: 117px; //82 do menu superior + 35 de distanciamento da página
    padding-right: 200px;
    display: flex;
    flex-direction: row;

    @media(max-width: 1000px) {
        padding-right: 0;
    }
`


export const ThemePage = styled.div`
    width: 100%;
`
