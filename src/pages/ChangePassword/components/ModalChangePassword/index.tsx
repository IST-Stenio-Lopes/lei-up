import Modal from "../../../../components/modal"
import { SubTitleRegister, TitleRegister } from "../../../Register/style"
import * as Styled from './style'

interface ImodalChangePassword{
    close: () => void;
}

export const ModalChangePassword: React.FC<ImodalChangePassword> = ({close}) => {

    return(
        <Modal>
            <Styled.ModalChangePasswordContainer>
                <Styled.CloseModal onClick={close}/>
                <Styled.LockModal/>

                <Styled.ModalSendEmailTextContainer>
                     <TitleRegister>
                        E-mail enviado com sucesso
                    </TitleRegister>
                    <SubTitleRegister>
                        Confira sua caixa de entrada
                    </SubTitleRegister>
                </Styled.ModalSendEmailTextContainer>
               
            </Styled.ModalChangePasswordContainer>
        </Modal>
    )
}