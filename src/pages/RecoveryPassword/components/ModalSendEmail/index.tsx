import Modal from "../../../../components/Modal"
import { SubTitleRegister, TitleRegister } from "../../../Register/style"
import * as Styled from './style'

interface ImodalSendEmail{
    close: () => void;
}

export const ModalSendEmail: React.FC<ImodalSendEmail> = ({close}) => {

    return(
        <Modal>
            <Styled.ModalSendEmailContainer>
                <Styled.CloseModal onClick={close}/>
                <Styled.MailModal/>

                <Styled.ModalSendEmailTextContainer>
                     <TitleRegister>
                        E-mail enviado com sucesso
                    </TitleRegister>
                    <SubTitleRegister>
                        Confira sua caixa de entrada
                    </SubTitleRegister>
                </Styled.ModalSendEmailTextContainer>
               
            </Styled.ModalSendEmailContainer>
        </Modal>
    )
}