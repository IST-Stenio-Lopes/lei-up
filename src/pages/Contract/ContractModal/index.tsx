import { X } from "phosphor-react";

import Modal from "../../../components/Modal"
import { RequestChangeContract } from "./contents/RequestChangeContract";
import { RequestRevisionContract } from "./contents/RequestRevisionContract";
import * as Styled from './styled';

interface IcontractModal{
    typeModal: 'change'|'revision',
    close: () => void
}

export const ContractModal: React.FC<IcontractModal> = ({typeModal, close}) => {

    return(
        <Modal>
            <Styled.ContractModalContainer>
            <X
                    cursor={'pointer'}
                    color={'#878A8C'}
                    width={24}
                    height={24}
                    style={{
                        'position': 'absolute',
                        'top': '24px',
                        'left': '24px'
                    }}
                    onClick={close}
                />
            {
                typeModal === 'change'?

                (<RequestChangeContract close={close}/>) : (<RequestRevisionContract close={close}/>)
            }
            

            </Styled.ContractModalContainer>
        </Modal>
    )

}