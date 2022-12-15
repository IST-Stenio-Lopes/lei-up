import { CheckCircle, ClockCounterClockwise, FilePlus } from "phosphor-react"

import * as Styled from './style'

export const PageOptionsHeader: React.FC = () => {

    return(
        <Styled.DashboardPageOptionsHeaders>
            <Styled.DashboardPageOptionHeader>
                <FilePlus width={24} height={24} color={'#4B4B87'} />
                <Styled.DashboardPageOptionHeaderTitle>
                    Novos
                </Styled.DashboardPageOptionHeaderTitle>
            </Styled.DashboardPageOptionHeader>

            <Styled.DashboardPageOptionHeader>
                <ClockCounterClockwise width={24} height={24} color={'#4B4B87'} />
                <Styled.DashboardPageOptionHeaderTitle>
                    Revisão
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