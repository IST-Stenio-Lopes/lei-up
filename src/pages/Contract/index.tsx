import { ArrowClockwise, Eye, PencilSimple } from "phosphor-react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { PageTitle } from "../../components/PageTitle";
import { Theme } from "../../theme"
import { ContractModal } from "./ContractModal";
import { ContractOption } from "./ContractOption";
import * as Styled from './style';

export const ContractPage: React.FC = () => {

    const {contractId} = useParams();
    let navigate = useNavigate();
    const [typeModal, setTypeModal] = useState<'change'|'revision'>('change');
    const [showModal, setShowModal] = useState(false);


    function HandleShowModal(e: 'change' | 'revision'){
        setTypeModal(e);
        setShowModal(true)
    }
    // action={() => navigate(`/dashboard/contract/${item.id}`)}
    return(
        <Theme isLoginOrRegister={false} gradient>
            {
                showModal && <ContractModal close={() => setShowModal(false)} typeModal={typeModal} contractId={contractId as string}/>
            }
            <Styled.ContractPageContainer>
            <PageTitle
                title={`Contrato ${contractId}`}
                goBack={true}
            />

            <Styled.ContractPageOptionsList>
                <ContractOption
                    Icon={Eye}
                    action={() =>{ navigate(`/dashboard/contractview/${contractId}`, {state: {edit: false}})}}
                    title={"Visualizar contrato"}
                    information={"Visualizar o arquivo em PDF e fazer dowloand."}
                />

                <ContractOption
                    Icon={PencilSimple}
                    action={() => {HandleShowModal('change')}}
                    title={"Solicitar alterações"}
                    information={"Solicitar alterações neste contrato."}
                />

                <ContractOption
                    Icon={ArrowClockwise}
                    action={() => {HandleShowModal('revision')}}
                    title={"Solicitar nova revisão"}
                    information={"Realizar nova revisão deste contrato."}
                />
                
                
            </Styled.ContractPageOptionsList>

            </Styled.ContractPageContainer>
        </Theme>
    )
}