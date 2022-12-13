import React, { ReactNode } from "react";

import * as Styled from "./style";

interface ModalI {
    children: ReactNode
}

const Modal: React.FC<ModalI> = ({ children }) => {


    return (
        <Styled.AlignCenterStyle>
            <Styled.ModalContainer>
                {children}
            </Styled.ModalContainer>
        </Styled.AlignCenterStyle>
    )


}
export default Modal