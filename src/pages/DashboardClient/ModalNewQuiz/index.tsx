import { CaretRight, CurrencyCircleDollar, Users, X } from "phosphor-react";
import { useNavigate } from "react-router-dom";

import Modal from "../../../components/Modal"
import { ReactComponent as ListChecks } from './assets/listchecks.svg';
import * as Styled from './style';

interface ImodalNewQuiz{
    close: () => void
}

export const ModalNewQuiz: React.FC<ImodalNewQuiz> = ({close}) => {

    let navigate = useNavigate();


    return(
        <Modal>
            <Styled.ModalNewQuizContainer>
                <X
                    cursor={'pointer'}
                    color={'#878A8C'}
                    width={24}
                    height={24}
                    style={{
                        'position': 'absolute',
                        'top': '24px',
                        'left': '24px'
                    }}
                    onClick={close}
                />
                <Styled.ModalNewQuizContent> 
                    <ListChecks
                        style={{
                            'margin': '0 auto'
                        }}
                    />

                    <Styled.ModalNewQuizTextQuestion>
                        Que tipo de contrato deseja solicitar?
                    </Styled.ModalNewQuizTextQuestion>

                    <Styled.ModalNewQuizButton onClick={() => navigate('quiz')}>
                        <Users 
                            color="#6C6CBB"
                            width={24}
                            height={24}
                        />
                        <Styled.ModalNewQuizButtonText>
                            Sociedade
                        </Styled.ModalNewQuizButtonText>
                        <CaretRight 
                            color="#6C6CBB"
                            width={24}
                            height={24}
                            style={{
                                'position': 'absolute',
                                'right': '9px'
                            }}
                        />
                    </Styled.ModalNewQuizButton>

                    <Styled.ModalNewQuizTextDescription>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed dui in odio lobortis ullamcorper. Nullam vel lorem ante. Quisque feugiat turpis sit amet hendrerit dapibus.  
                    </Styled.ModalNewQuizTextDescription>

                    <Styled.ModalNewQuizButton>
                        <CurrencyCircleDollar 
                            color="#6C6CBB"
                            width={24}
                            height={24}
                        />
                        <Styled.ModalNewQuizButtonText>
                            Investidor
                        </Styled.ModalNewQuizButtonText>
                        <CaretRight 
                            color="#6C6CBB"
                            width={24}
                            height={24}
                            style={{
                                'position': 'absolute',
                                'right': '9px'
                            }}
                        />
                    </Styled.ModalNewQuizButton>

                    <Styled.ModalNewQuizTextDescription>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed dui in odio lobortis ullamcorper. Nullam vel lorem ante. Quisque feugiat turpis sit amet hendrerit dapibus.  
                    </Styled.ModalNewQuizTextDescription>


                </Styled.ModalNewQuizContent>


            </Styled.ModalNewQuizContainer>
        </Modal>
    )
    
}