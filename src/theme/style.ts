import styled from 'styled-components';

export const ThemeContainer = styled.div`
    min-height: 100vh;
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
    min-height: 100vh;
    width: 100%;
    position: relative;
    display: flex;
`


export const PurpleThemePageContainer = styled.div`
    width: 100%;
    min-height: 100%;
    background-color: #F4EFF4;
`

export const PurpleThemePageGradient = styled.div`
    z-index: 0;
    position: fixed;
    bottom: 0;
    height: 108px;
    width: 100%;
    background: linear-gradient(180deg, rgba(108, 108, 187, 0.72) 0%, rgba(108, 108, 187, 0.36) 33.33%, rgba(108, 108, 187, 0.144) 66.67%, rgba(108, 108, 187, 0) 100%);
    transform: rotate(180deg);
    bottom: 0;
`
