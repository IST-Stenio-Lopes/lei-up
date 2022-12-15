import { Bell, Scales, User } from 'phosphor-react';
import { useAuth } from '../../../../contexts/auth';

import * as Styled from './styled';

export const TopMenu: React.FC = () => {

    const {stateAuth} = useAuth();

    return(
        <Styled.TopMenuContainer>
            <Styled.TopMenuContent>
                {
                    stateAuth.userType === 'client'? <User size={24} color={'#4B4B87'}/> : <Scales size={32} color={'#4B4B87'}/>
                }
                
                <Styled.TopMenuText>
                    Bem-vindo Usuário
                </Styled.TopMenuText>
                <Bell size={24} color={'#4B4B87'}/>
            </Styled.TopMenuContent>
        </Styled.TopMenuContainer>
    )
}