import { Warning } from 'phosphor-react';
import { useNavigate } from 'react-router-dom';

import * as Styled from './styles';

interface IrequestChangeContract{
    close: () => void,
    contractId: string
}

export const RequestChangeContract: React.FC<IrequestChangeContract> = ({close, contractId}) => {

    let navigate = useNavigate();

    return(
        <Styled.ContractModalContent>
            <Warning
                color={'#B3261E'}
                width={89}
                height={89}
            />
            <Styled.ContractModalText>
                Após solicitar alterações no contrato, ele será novamente enviado para analise. Deseja prosseguir?
            </Styled.ContractModalText>

            <Styled.ContractModalButtonsContainer>
                <Styled.ContractModalButton type='cancel' onClick={close}>
                    Cancelar
                </Styled.ContractModalButton>
                <Styled.ContractModalButton type='confirm' onClick={() => navigate(`/dashboard/contractview/${contractId}`, {state: {edit: true}})}>
                    Continuar
                </Styled.ContractModalButton>
            </Styled.ContractModalButtonsContainer>

        </Styled.ContractModalContent>
    )
}