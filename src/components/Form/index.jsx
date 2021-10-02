import { useState } from "react";


export default function Form({
    setTransactions, 
    transactions,
    })
{

    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState("");
    const [price, setPrice] = useState("");

    const handleForm = () => {
        setTransactions([...transactions, {
                name: name,
                quantity: Number(quantity),
                price: Number(price),
        }])
    }

    return (
        <div>
            <label>Nome do Produto</label>
            <input placeholder="Nome do produto" type="text" value={name} onChange={(e) => setName(e.target.value)}/>
            <label>Quantidade</label>
            <input placeholder ="Quantidade do produto" type="text" value={quantity} onChange={(e) => setQuantity(e.target.value)}/>
            <label>Preço</label>
            <input placeholder ="Preço do produto" type="text" value={price} onChange={(e) => setPrice(e.target.value)}/>
            <button onClick={handleForm}>Adicionar</button>
        </div>
    )
}
