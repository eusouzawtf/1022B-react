import './App.css'
import MeuComponente from './componentes/MeuComponente'
function App() {
  let nome = "Luís Guilherme"
  let sobrenome = "Souza"
  return (
    <>
    <MeuComponente></MeuComponente>
      <h1 className="nome">
        Nome: {nome}
        </h1>
      <p className="sobrenome">
        {sobrenome}
        </p>
      </>
  )//Retorna JSX - JavaScript XML
}

export default App