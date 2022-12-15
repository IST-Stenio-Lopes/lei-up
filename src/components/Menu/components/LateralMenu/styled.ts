import styled from "styled-components";

import RocketLogo from '../../assets/rocket-with-name.svg';
import  Rocket from '../../assets/single-rocket.svg';

export const LateralMenuLogo = styled.div`
    margin-top: 14px;
    width: 35px;
    height: 95px;
    background-image: url(${Rocket});
    background-repeat: no-repeat;
    background-position: center;
    transition: 0.5s;
    align-self: center;
    margin-bottom: 66px;
 
`
export const LateralMenuContainer = styled.div`
    display: flex;
    flex-direction: column;
    position: fixed;
    width: 81px;
    height: 100%;
    min-height: 100vh;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    background: #FFFFFF;
    transition: 0.3s;
    z-index: 2;

    :hover{
        width: 256px;

        ${LateralMenuLogo}{
            background-image: url(${RocketLogo});
            background-size: contain;
            width: 168px;
            height: 95px;
            /* margin: 0 18px; */
            
        }
    }

`

export const ShowIconsContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 18px;

`