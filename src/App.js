
import './App.css';
import Container from './Componentes/Container/Container';
import './Componentes/Fomulario/Formulario';
import Header from './Componentes/Header/Header';
function App() {
  return (
    <div className="h-100">
      <Header></Header>
      <div className='container-fluid h-100'>
        <Container></Container>
      </div>
      
    </div>
  );
}

export default App;
