import { Bell, User } from 'phosphor-react';

import * as Styled from './styled';

export const TopMenu: React.FC = () => {


    return(
        <Styled.TopMenuContainer>
            <Styled.TopMenuContent>
                <User size={24} color={'#4B4B87'}/>
                <Styled.TopMenuText>
                    Bem-vindo Usuário
                </Styled.TopMenuText>
                <Bell size={24} color={'#4B4B87'}/>
            </Styled.TopMenuContent>
        </Styled.TopMenuContainer>
    )
}