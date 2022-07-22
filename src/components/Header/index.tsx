import { useState } from 'react';
import logo from '../../../assets/logo.svg';
import mobileLogo from '../../../assets/mobile-logo.svg'
import { Container, Content } from './styles';
import { Plus } from 'phosphor-react'
import useMedia from 'use-media';

interface HeaderProps {
    onOpenNewTransactionModal: () => void;
}

export function Header({ onOpenNewTransactionModal }: HeaderProps) {
    const isMobile = useMedia({
        maxWidth: 480,
    })

    return(
        <Container>
            <Content>
                { isMobile ? <img src={mobileLogo} alt="dev finances"/> : <img src={logo} alt="dev finances" /> }
                <button 
                  type='button'
                  onClick={onOpenNewTransactionModal}>
                    { isMobile ? <Plus size={18} /> : 'Nova transação' }
                </button>
            </Content>
        </Container>
    );
}