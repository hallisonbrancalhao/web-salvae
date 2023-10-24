import React from 'react'
import ExpandableText from '../../components/perguntas/expandable-text'
import './styles.scss'

export default function Perguntas() {
    return (
        <div className='container'>
            <div className="titulo">
                <h1 className='h1'>
                    Perguntas
                    <span className='frequente'> frequentes</span>
                </h1>
            </div>
            <div className="caixa">
                <div className="texto">
                    <ExpandableText
                        initialText="Consigo gerar um copum sem ter uma assinatura?"
                        expandedText="Software é um termo técnico que foi traduzido para a língua portuguesa como suporte 
                        lógico e trata-se de uma sequência de instruções a serem seguidas e/ou executadas, na manipulação, 
                        redirecionamento ou modificação de um dado ou acontecimento."
                    />
                    <ExpandableText
                        initialText="Consigo?"
                        expandedText="Não é possível gerar um cupom sem comprar a assinatura do SalvaÊ!"
                    />
                    <ExpandableText
                        initialText="Consigo gerar um copum sem ter uma assinatura?"
                        expandedText="Não é possível gerar um cupom sem comprar a assinatura do SalvaÊ!"
                    />
                </div>
            </div>
        </div>
    );
};
