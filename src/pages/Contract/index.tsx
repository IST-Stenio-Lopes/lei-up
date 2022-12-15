import { ArrowClockwise, Eye, PencilSimple } from "phosphor-react";
import { useParams } from "react-router-dom";

import { PageTitle } from "../../components/PageTitle";
import { Theme } from "../../theme"
import { ContractOption } from "./ContractOption";
import * as Styled from './style';

export const ContractPage: React.FC = () => {

    const {contractId} = useParams();

    return(
        <Theme isLoginOrRegister={false} gradient>
            <Styled.ContractPageContainer>
            <PageTitle
                    title={`Contrato ${contractId}`}
                    goBack={true}
            />

            <Styled.ContractPageOptionsList>
                <ContractOption
                    Icon={Eye}
                    action={() => {}}
                    title={"Visualizar contrato"}
                    information={"Visualizar o arquivo em PDF e fazer dowloand."}
                />

                <ContractOption
                    Icon={PencilSimple}
                    action={() => {}}
                    title={"Solicitar alterações"}
                    information={"Solicitar alterações neste contrato."}
                />

                <ContractOption
                    Icon={ArrowClockwise}
                    action={() => {}}
                    title={"Solicitar nova revisão"}
                    information={"Realizar nova revisão deste contrato."}
                />
                
                
            </Styled.ContractPageOptionsList>

            </Styled.ContractPageContainer>
        </Theme>
    )
}