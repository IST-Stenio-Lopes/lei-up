import styled from "styled-components";

import { ReactComponent as Close } from './assets/close.svg';
import { ReactComponent as Lock } from './assets/lock.svg';

export const ModalChangePasswordContainer = styled.div`
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

export const LockModal = styled(Lock)`
    position: absolute;
    top: 50px;
    left: 150px;
`

export const ModalSendEmailTextContainer = styled.div`

    margin-top: 183px;
    text-align: center;
`