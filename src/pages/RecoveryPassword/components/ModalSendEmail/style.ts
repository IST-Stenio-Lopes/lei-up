import styled from "styled-components";

import { ReactComponent as Close } from './assets/close.svg';
import { ReactComponent as Mail } from './assets/mail.svg';

export const ModalSendEmailContainer = styled.div`
    width: 393px;
    height: 336px;
    background-color: #F4EFF4;
    position: relative;
`

export const CloseModal = styled(Close)`
    position: absolute;
    cursor: pointer;
    top: 24px;
    left: 24px;
`

export const MailModal = styled(Mail)`
    position: absolute;
    top: 50px;
    left: 150px;
`

export const ModalSendEmailTextContainer = styled.div`

    margin-top: 183px;
    text-align: center;
`