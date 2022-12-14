import { Scroll, UserGear } from "phosphor-react";
import { useLocation, useNavigate } from 'react-router-dom';

import { Exit } from "./OptionExit";
import { OptionMenu } from './OptionMenu';
import * as Styled from './styled';

export const LateralMenu: React.FC = () => {

    const location = useLocation();
    const navigate = useNavigate();


    return(
        <Styled.LateralMenuContainer>
            <Styled.LateralMenuLogo/>
                <Styled.ShowIconsContainer>
                    <OptionMenu
                        Icon={Scroll}
                        currentPathName={location.pathname}
                        localPathName='/dashboard'
                        action={() => {navigate('/dashboard')}}
                        title={'Contratos'}
                    />
                    <OptionMenu
                        Icon={UserGear}
                        currentPathName={location.pathname}
                        localPathName='/settings'
                        action={() => {navigate('/settings')}}
                        title={'Meus dados'}
                    />
                </Styled.ShowIconsContainer>

                <Exit/>
          
        </Styled.LateralMenuContainer>
    )
}