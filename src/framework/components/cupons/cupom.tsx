import React from 'react';

export const Cupom = () => {
    return (
        <table>
            <thead>
                <tr>
                    <th>FOTO</th>
                    <th>NOME DO CUPOM</th>
                    <th>CATEGORIA</th>
                    <th>STATUS</th>
                    <th>AÇÕES</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td></td>
                    <td>Pizza de Calabresa</td>
                    <td></td>
                    <td><span style={{color: 'green'}}>●</span></td>
                    <td>
                        <button>🚩</button> {/* Botão de ação 1 */}
                        <button>✏️</button> {/* Botão de ação 2 */}
                        <button>✔️</button> {/* Botão de ação 3 */}
                    </td>
                </tr>
            </tbody>
        </table>
    );
};

