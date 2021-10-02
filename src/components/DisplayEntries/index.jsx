import React from 'react'

export default function DisplayEntries({entries}) {
    return (
        <>  
            <h1>Entradas</h1>
            {entries.map((item, index) => {
                return (
                    <div key={index}>
                        <p>Produto: {item.name}, Quantidade: {item.quantity}, Preço: {item.price}</p>
                    </div>
                )
            })}
        </>
    )
}
