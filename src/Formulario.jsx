//componete de formulario (com bootstrap) 3 inputs (nome, idade, cidade) e 4 botão de submit

function Formulario({
    btnCadastrar, 
    setNome, 
    setIdade, 
    setCidade, 
    cadastrar, 
    nome, 
    idade, 
    cidade, 
    alterar , 
    excluir,
    cancelar
}) {

return (
  
    <form>
        <h3>Formulário</h3>
        
        
        <input type="text" className="form-control"  value={nome}  placeholder="---- NOME ----"   onChange={e=>setNome(e.target.value)} required/>
        
        <input type="number" className="form-control" value={idade}  placeholder="---- IDADE ----"  onChange={e=>setIdade(e.target.value)} min={0} required/>
        
        <input type="text" className="form-control" value={cidade} placeholder="---- CIDADE ----" onChange={e=>setCidade(e.target.value)} required/> 

        {
//Operador ternário para acessar o props

}
        {
            btnCadastrar ?
            <input     type="button" value="Cadastrar" className="btn btn-danger" onClick={cadastrar} />
            :
            <div>
                <input type="button" value="Alterar"   className="btn btn-warning" onClick={()=>alterar()}/>
                <input type="button" value="Excluir"   className="btn btn-success"  onClick={excluir}/>
                <input type="button" value="Cancelar"  className="btn btn-primary"onClick={cancelar}/>
            </div>
        }
    </form>   
   
            

)
}

export default Formulario