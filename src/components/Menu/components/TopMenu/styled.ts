import styled from "styled-components";

export const TopMenuContainer = styled.div`
    position: fixed;
    height: 55px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    top: 0;
    right: 0;
    left: 0;
    z-index: 2;
    padding: 0 200px;
    box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.2);
    background-color: white;
`

export const TopMenuContent = styled.div`
    display: flex;
    align-items: center;
    width: auto;
    height: 100%;
`
export const TopMenuText = styled.p`
    font-weight: 700;
    font-size: 14px;
    color: #4B4B87;
    margin-right: 100px;
    margin-left: 32px;
`