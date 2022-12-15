import { useState } from "react"
import { useNavigate } from "react-router-dom"

import { PageTitle } from "../../components/PageTitle"
import { Theme } from "../../theme"
import { DashboardOption } from "./DashboardOption"
import { ModalNewQuiz } from "./ModalNewQuiz"
import { PageOptionsHeader } from "./PageOptionsHeader"
import * as Styled from './style'

export const DashboardClientPage: React.FC = () => {


    let navigate = useNavigate()

    const [showModalNewQuiz, setShowModalNewQuiz] = useState(false);

    const constractsList = [{id: 4, name: 'Contrato 4'}, {id: 5, name: 'Contrato 5'},
     {id: 6, name: 'Contrato 6'}, {id: 7, name: 'Contrato 7'}, {id: 8, name: 'Contrato 8'},
     {id: 9, name: 'Contrato 9'}, {id: 10, name: 'Contrato 10'}, {id: 11, name: 'Contrato 11'},
     {id: 12, name: 'Contrato 12'}, {id: 13, name: 'Contrato 13'}, {id: 14, name: 'Contrato 14'},
     {id: 15, name: 'Contrato 15'}, {id: 16, name: 'Contrato 16'}, {id: 17, name: 'Contrato 17'} ];

    const finishedContractsList = [{id: 1, name: 'Contrato 1'}, {id: 2, name: 'Contrato 2'}, {id: 3, name: 'Contrato 3'}]

    return(
        <Theme isLoginOrRegister={false}>
            {
                showModalNewQuiz && <ModalNewQuiz close={() => setShowModalNewQuiz(false)}/>
            }
            
            <Styled.DashboardPageContainer>
                <PageTitle
                    title="Contratos"
                    goBack={true}
                />
              <PageOptionsHeader/>

              <Styled.DashboardPageOptionsContainer>
                <Styled.DashboardPageOptions>
                    <DashboardOption isNewContract text="Novo contrato" action={() => setShowModalNewQuiz(true)}/>
                </Styled.DashboardPageOptions>

                <Styled.DashboardPageOptions>
                    {
                        constractsList.map((item) => (
                            <DashboardOption key={item.id} isNewContract={false} text={item.name} action={() => navigate(`/dashboard/contract/${item.id}`)}/>
                        ))
                    }
                </Styled.DashboardPageOptions>

                <Styled.DashboardPageOptions>
                    {
                        finishedContractsList.map((item) => (
                            <DashboardOption key={item.id} isNewContract={false} text={item.name}  action={() => navigate(`/dashboard/contract/${item.id}`)}/>
                        ))
                    }
                </Styled.DashboardPageOptions>
              </Styled.DashboardPageOptionsContainer>

            </Styled.DashboardPageContainer>
        </Theme>
    )
}