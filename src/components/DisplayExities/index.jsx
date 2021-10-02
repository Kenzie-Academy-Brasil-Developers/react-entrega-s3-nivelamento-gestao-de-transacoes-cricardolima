import React from 'react'

export default function DisplayExities({exits}) {
    return (
        <>
            <h1>Saídas</h1>
            {exits.map((item, index) => {
                return (
                    <div key={index}>
                        <p>Produto: {item.name} Quantidade: {item.quantity} Preço: {item.price}</p>
                    </div>
                )
            })}
        </>
    )
}
