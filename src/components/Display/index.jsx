import DisplayEntries from '../DisplayEntries';
import DisplayExities from "../DisplayExities";

export default function Display({
    entries, 
    exits, 
    transactions, 
    showExit, 
    setShowExit}) 
    {

    return (
        <div>
            {showExit ?
                <DisplayExities exits={exits}/> : 
                <DisplayEntries entries={entries}/>
            }
            {showExit ?
                <button onClick={() => setShowExit(false)}>Mostrar Entradas</button> :
                <button onClick={() => setShowExit(true)}>Mostrar Saídas</button>
            }
            <div>
                <h1>Transações</h1>
                {transactions.map((item, index) => {
                    return (
                        <>
                         <p>Produto: {item.name} Quantidade: {item.quantity} Preço: {item.price}</p>
                        </>
                    )
                })}
            </div>
        </div>
    )
}
