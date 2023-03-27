import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Formulario from './Formulario'
import './App.css'
import Tabela from './Tabela'

function App() {

  //usando o useState
  const [indiceVetor, setIndiceVetor] = useState('')
  const [btnCadastrar, setBtnCadastrar] = useState(true)
  const[nome, setNome] = useState('')
  const[idade, setIdade] = useState('')
  const[cidade, setCidade] = useState('')
  const [vetor, setVetor] = useState([])

//função para cadastrar
  function cadastrar(){
    let obj = {'nome': nome, 'idade': idade, 'cidade': cidade}
    //verificar campos vazios
    if(nome === '' || idade === '' || cidade === ''){
      alert('Preencha todos os campos')
      return 
    }else{
      setVetor([...vetor, obj])
    }
    

//limpando os campos
    setNome('')
    setIdade('')
    setCidade('')
  }

//função para selecionar usuário
  function selecionarUsuario(index){
    setBtnCadastrar(false)
    setIndiceVetor(index)
    setNome(vetor[index].nome)
    setIdade(vetor[index].idade)
    setCidade(vetor[index].cidade)
  }

//função para alterar dados
  function alterar(){
    let obj = {'nome': nome, 'idade': idade, 'cidade': cidade}
    let copiaVetor = [...vetor]
    copiaVetor[indiceVetor] = obj
    //verificar campos vazios
    if(nome === '' || idade === '' || cidade === ''){
      alert('Preencha todos os campos')
      return
    }else{
      setVetor(copiaVetor)
    }
      setBtnCadastrar(true)
      setNome('')
      setIdade('')
      setCidade('')
  } 

//função para excluir dados (tem que fazer uma cópia do vetor para não alterar o original)
  function excluir(){
    let copiaVetor = [...vetor]
    copiaVetor.splice(indiceVetor, 1)//splice vai remover o elemento do vetor
    setVetor(copiaVetor)
    setBtnCadastrar(true)
    setNome('')
    setIdade('')
    setCidade('')
  }
//função para cancelar
  function cancelar(){
    setBtnCadastrar(true)
    setNome('')
    setIdade('')
    setCidade('')
  }

  return (
    <> 
      {/* <h4>{JSON.stringify(vetor)}</h4> */}
     

      <Formulario 
        btnCadastrar={btnCadastrar}
        setNome={setNome}
        setIdade={setIdade}
        setCidade={setCidade}
        cadastrar={cadastrar}
        nome={nome}
        idade={idade}
        cidade={cidade}
        alterar={alterar}
        excluir={excluir}
        cancelar={cancelar}
      />
      <Tabela 
        vetor={vetor}
        selecionarUsuario={selecionarUsuario}
      />
    </>
  )
}

export default App