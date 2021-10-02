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
            {showExit ? (
                <>
                    <DisplayExities exits={exits}/> 
                    <button onClick={() => setShowExit(false)}>Mostrar Entradas</button>
                    <div>
                        <h1>Total de Saídas</h1>
                        <p>Quantidade de frutas vendidas: {exits.reduce((acc, index) => acc + (index.quantity * -1), 0)}</p>
                        <p>Valor total: R$ {exits.reduce((acc, index) => acc + index.price, 0)}</p>
                    </div>
                </>
            ): (
                <>
                    <DisplayEntries entries={entries}/>
                    <button onClick={() => setShowExit(true)}>Mostrar Saídas</button>
                    <div>
                        <h1>Total de Entradas</h1>
                        <p>Quantidade de frutas adicionadas: {entries.reduce((acc, index) => acc + index.quantity, 0)}</p>
                    </div>
                </>
            )}
            <div>

            </div>
            <div>
                <h1>Transações</h1>
                {transactions.map((item) => {
                    return (
                        <>
                         <p>Produto: {item.name}, Quantidade: {item.quantity}, Preço: {item.price}</p>
                        </>
                    )
                })}
            </div>
        </div>
    )
}
