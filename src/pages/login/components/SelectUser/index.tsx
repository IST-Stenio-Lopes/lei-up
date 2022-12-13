import { useEffect, useState } from 'react';

import { SelectLogincButton } from '../../../../components/buttons/buttons';
import * as Styled from './style';

interface IselectUser{
    setIsClientProp: (v: boolean) => void
}

export const SelectUser: React.FC<IselectUser> = ({setIsClientProp}) => {

    const [isClient, setIsClient] = useState(true)


    useEffect(() => {
        setIsClientProp(isClient)
    }, [isClient])


    return(
        <Styled.SelectUserContainer>
            <SelectLogincButton
                isClient={!isClient}
                action={() => setIsClient(false)}
                text={'Sou advogado'}
                widthPercent={100}
            />

          
            <SelectLogincButton 
                isClient={isClient}
                action={()=> setIsClient(true)}
                text={'Sou Cliente'}
                widthPercent={100}
            />


        </Styled.SelectUserContainer>
    )
}