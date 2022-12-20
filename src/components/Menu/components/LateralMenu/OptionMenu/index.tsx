import { IconProps } from "phosphor-react";
import { ForwardRefExoticComponent, RefAttributes } from "react";
import { useLocation } from "react-router-dom";

import * as Styled from './style'

interface IoptionMenu{
    localPathName: string,
    currentPathName: string,
    action: () => void,
    title: string,
    Icon: ForwardRefExoticComponent<IconProps & RefAttributes<SVGSVGElement>>
}


export const OptionMenu: React.FC<IoptionMenu> = ({localPathName, currentPathName, title, Icon, action}) => {

    // const location = useLocation()

    const active = currentPathName.includes(localPathName);

    const iconColor = active? '#fff' : '#4B4B87';


    return(
        <Styled.LateralMenuOptionContainer onClick={() => action()} active={active}>

            <Icon style={{'minWidth': '30px', 'minHeight': '30px', 'color': iconColor}}/>
            <Styled.LateralMenuOptionTitle active={active}>
                
                {title}
            </Styled.LateralMenuOptionTitle>

        </Styled.LateralMenuOptionContainer>
    )
}