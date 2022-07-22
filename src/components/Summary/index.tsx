import { useContext } from 'react';
import income from '../../../assets/income.svg';
import outcome from '../../../assets/outcome.svg';
import total from '../../../assets/total.svg';
import { TransactionsContext, useTransactions } from '../../hooks/useTransactions';

import { Container } from "./styles";

export function Summary() {
    const { transactions } = useTransactions()

    const summary = transactions.reduce((acc, transaction) => {
        if(transaction.type === 'deposit') {
            acc.deposits += transaction.amount
            acc.total += transaction.amount
        } else {
            acc.withdraw += transaction.amount
            acc.total -= transaction.amount
        }

        return acc;
    }, {
        deposits: 0,
        withdraw: 0,
        total: 0,
    })

    return(
        <Container>
            <div>
                <header>
                    <p>Entradas</p>
                    <img src={income} alt="Entradas" />
                </header>
                <strong>
                    {new Intl.NumberFormat('pt-BR', {
                            style: 'currency',
                            currency: 'BRL'
                    }).format(summary.deposits)}
                </strong>
            </div>

            <div>
                <header>
                    <p>Saídas</p>
                    <img src={outcome} alt="Saídas" />
                </header>
                <strong>
                    - {new Intl.NumberFormat('pt-BR', {
                            style: 'currency',
                            currency: 'BRL'
                        }).format(summary.withdraw)}
                </strong>
            </div>
            
            { summary.total >= 0 

            ? <div className='highlight-background-positive'>
                <header>
                    <p>Total</p>
                    <img src={total} alt="Total" />
                </header>
                <strong>
                    {new Intl.NumberFormat('pt-BR', {
                            style: 'currency',
                            currency: 'BRL'
                    }).format(summary.total)}
                </strong>
              </div>
            
            : <div className='highlight-background-negative'>
                <header>
                    <p>Total</p>
                    <img src={total} alt="Total" />
                </header>
                <strong>
                    {new Intl.NumberFormat('pt-BR', {
                            style: 'currency',
                            currency: 'BRL'
                    }).format(summary.total)}
                </strong>
              </div> }
            
        </Container>
    );
}