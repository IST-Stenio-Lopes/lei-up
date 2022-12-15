import { IconProps } from "phosphor-react"
import { ForwardRefExoticComponent, RefAttributes } from "react"

import * as Styled from './style'

interface IcontractOption{
    Icon: ForwardRefExoticComponent<IconProps & RefAttributes<SVGSVGElement>>,
    title: string,
    information: string,
    action: () => void

}

export const ContractOption: React.FC<IcontractOption> = ({action, Icon, information, title}) => {


    return(
        <Styled.ContractOptionContainer onClick={() => action}>
            <Icon width={56} height={56} color={'#6C6CBB'} style={{'alignSelf': 'center', 'marginTop': '72px'}}/>

            <Styled.ContractOptionTitle>
                {title}
            </Styled.ContractOptionTitle>

            <Styled.ContractOptionDescription>
                {information}
            </Styled.ContractOptionDescription>
            
        </Styled.ContractOptionContainer>
    )
}