import './App.css'
function App() {
  let nome = "Luís Guilherme"
  let sobrenome = "Souza"
  return (
    <>
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