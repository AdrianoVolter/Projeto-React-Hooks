//Tabela para exibir os dados
import { useState } from "react"
//função principal
function Tabela({vetor, selecionarUsuario}){

//usando o useState (filtragem)
    const [termo, setTermo] = useState('')


//retornando o componente
    return (
        <div className="form">
            <input type="text" onChange={e=>setTermo(e.target.value)} placeholder="Pesquise um nome :" className="form-control pesquisa"/>
            
            <table className="table table-striped">
                <thead className="table">
                    <tr>
                        <th scope="col">Nº</th>
                        <th scope="col">Nome</th>
                        <th scope="col">Idade</th>
                        <th scope="col">Cidade</th>
                        <th scope="col">Selecionar</th>
                    </tr>
                </thead>
                <tbody>
                    {//filtrando os dados com o termo (usa o filter)
                        vetor.filter(obj => obj.nome.includes(termo)).map((obj, index)=>(
                            <tr key={index}>
                                <td>{index +1}</td>
                                <td>{obj.nome}</td>
                                <td>{obj.idade}</td>
                                <td>{obj.cidade}</td>
                                <td>
                                    <button
                                        className="btn btn-success"
                                        onClick={()=>selecionarUsuario(index)}
                                    >Selecionar</button>
                                </td>
                            </tr>

                        ))

                    }

                </tbody>
            
        </table>
        </div>
    )
    }
    
//expotando o componente
export default Tabela