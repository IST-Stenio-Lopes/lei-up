import * as Styled from './style';


interface IgenericButtonProps{
    widthPx?: number,
    heightPx?: number,
    widthPercent?: number,
    heightPercent?: number,
    text: string,
    action(): void
}

interface IselectLoginButtonProps{
   widthPx?: number,
   heightPx?: number,
   widthPercent?: number,
   heightPercent?: number,
   text: string,
   action(): void,
   isClient: boolean
}

const GenericButton: React.FC<IgenericButtonProps> = ({heightPercent, heightPx, widthPercent, widthPx, text, action}) => {
    return (
       <Styled.StyledGenericButton
        heightPercent={heightPercent}
        widthPercent={widthPercent}
        heightPx={heightPx}
        widthPx={widthPx}
        onClick={action}
       >
        <p>
           {text} 
        </p>

       </Styled.StyledGenericButton>
    )
}

const SelectLogincButton: React.FC<IselectLoginButtonProps> = ({heightPercent, heightPx, widthPercent, widthPx, text, action, isClient}) => {
    return (
       <Styled.StyledSelectLoginButton
        heightPercent={heightPercent}
        widthPercent={widthPercent}
        heightPx={heightPx}
        widthPx={widthPx}
        onClick={action}
        isClient={isClient}
       >
        <p>
           {text} 
        </p>

       </Styled.StyledSelectLoginButton>
    )
}




export {GenericButton, SelectLogincButton}