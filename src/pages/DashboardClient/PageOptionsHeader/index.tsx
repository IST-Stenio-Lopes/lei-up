import { CheckCircle, NotePencil, SpinnerGap } from "phosphor-react"

import * as Styled from './style'

export const PageOptionsHeader: React.FC = () => {

    return(
        <Styled.DashboardPageOptionsHeaders>
            <Styled.DashboardPageOptionHeader>
                <NotePencil width={24} height={24} color={'#4B4B87'} />
                <Styled.DashboardPageOptionHeaderTitle>
                    Realizar questionário
                </Styled.DashboardPageOptionHeaderTitle>
            </Styled.DashboardPageOptionHeader>

            <Styled.DashboardPageOptionHeader>
                <SpinnerGap width={24} height={24} color={'#4B4B87'} />
                <Styled.DashboardPageOptionHeaderTitle>
                    Em análise
                </Styled.DashboardPageOptionHeaderTitle>
            </Styled.DashboardPageOptionHeader>

            <Styled.DashboardPageOptionHeader>
                <CheckCircle width={24} height={24} color={'#4B4B87'} />
                <Styled.DashboardPageOptionHeaderTitle>
                    Concluídos
                </Styled.DashboardPageOptionHeaderTitle>
            </Styled.DashboardPageOptionHeader>
        </Styled.DashboardPageOptionsHeaders>
    )
}