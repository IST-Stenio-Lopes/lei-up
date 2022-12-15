import { CaretLeft } from 'phosphor-react'
import { useNavigate } from 'react-router-dom'

import * as Styled from './style'

interface IpageTitle{
    title: string,
    goBack?: boolean
}

export const PageTitle: React.FC<IpageTitle> = ({title, goBack}) => {

    let navigate = useNavigate()

    return( 
        <Styled.PageTitleContainer>
            {
                goBack && 
                (
                    <>
                        <CaretLeft color='#4B4B87' height={24} width={24} cursor="pointer" onClick={() => {navigate(-1)}}/>
                        <Styled.PageTitleGoBack onClick={() => {navigate(-1)}}>Voltar</Styled.PageTitleGoBack>
                    </>
                )
            }

            <Styled.PageTitleText><p>{title}</p></Styled.PageTitleText>
          

        </Styled.PageTitleContainer>
    )
}