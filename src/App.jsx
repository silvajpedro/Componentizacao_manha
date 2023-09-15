import "./App.css";
import Header from "./header.jsx";
import Main from "./Main.jsx"
import Footer from "./Footer";

// Aqui no componente principal App estamos importando
// Os outros componentes que criamos como Header, Main e Footer
// Esse é o conceito de componentização
// Arquivos separados utilizados de forma conjunta
function App() {
  return (
    <>
      <Header />
      <Main/>
      <Footer/>
    </>
  );
}

export default App;
