import { Warning } from 'phosphor-react';
import { useState } from 'react';

import { ConfirmationRevisionContract } from './ConfirmationRevisionContract';
import * as Styled from './styles';

interface IrequestChangeContract{
    close: () => void
}


export const RequestRevisionContract: React.FC<IrequestChangeContract> = ({close}) => {

    const [isConfirm, setIsConfirm] = useState(false);


    return(
        <>
            {
                !isConfirm?

                (
                    <Styled.ContractModalContent>
                        <Warning
                            color={'#B3261E'}
                            width={89}
                            height={89}
                        />
                        <Styled.ContractModalText>
                            A nova solicitação poderá demorar 90 dias. Deseja prosseguir?
                        </Styled.ContractModalText>

                        <Styled.ContractModalButtonsContainer>
                            <Styled.ContractModalButton type='cancel' onClick={close}>
                                Cancelar
                            </Styled.ContractModalButton>
                            <Styled.ContractModalButton type='confirm' onClick={() => setIsConfirm(true)}>
                                Continuar
                            </Styled.ContractModalButton>
                        </Styled.ContractModalButtonsContainer>
                    </Styled.ContractModalContent>
                ):
                <ConfirmationRevisionContract close={close}/>
            }
        </>

    )
}