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
                        initialText="Como funciona o tour?"
                        expandedText="O Salvaê é um guia com mais de 100 cupons que dão benefícios em dobro, 
                        ou seja, com ele você compra um prato e ganha outro nos estabelecimentos participantes.
                        No total são mais de R$ 7 mil em economia e você poderá conhecer novos lugares e ter novas experiências.
                        Esta edição é válida até Agosto de 2024."
                        expandedText2=""
                        expandedText3=""
                    />
                    <ExpandableText
                        initialText="Preciso fazer reserva no restaurante?"
                        expandedText="Com o Salvaê não é necessário fazer reserva. Lembre-se de sempre verificar os dias de uso, 
                        promoções e regras de cada estabelecimento antes de ir. E caso tenha alguma dúvida, 
                        entre em contato diretamente com o restaurante parceiro."
                        expandedText2=""
                        expandedText3=""
                    />
                    <ExpandableText
                        initialText="Como funcionam os descontos?"
                        expandedText="Os restaurantes parceiros disponibilizam descontos de 100% de desconto no segundo prato ou drink, 
                        ou seja, você compra um prato ou drink e GANHA OUTRO.
                        Aqui vão alguns exemplos pra te deixar com água na boca:"
                        expandedText2="➔ Visite sua hamburgueria favorita com o crush, compre um Hambúrguer artesanal e GANHE OUTRO."
                        expandedText3="➔ Chame a família para ir comer uma pizza Domingo anoite, compre uma pizza e GANHE OUTRA."
                    />
                    <ExpandableText
                        initialText="Existem dias específicos para usar os vouchers?"
                        expandedText="Sim, cada restaurante parceiro faz a escolha da sua promoção e dos melhores dias 
                        para uso do voucher. A decisão de cada um é bem pensada para que o fluxo de clientes não atrapalhe 
                        o bom atendimento, e não entre em choque de datas de promoções específicas do próprio estabelecimento. 
                        A qualidade de atendimento e dos pratos oferecidos, conforto dos clientes e facilidade no uso dos 
                        descontos sempre são a nossa prioridade na hora de selecionar um parceiro."
                        expandedText2=""
                        expandedText3=""
                    />
                </div>
            </div>
        </div>
    );
};
