import './App.css';
import React, {useState} from "react";
import Modal from 'react-modal';

Modal.setAppElement('#root');

// Ejercicio 1
  const App = () => {
    const [likes, setLikes] = useState(0);
    const like = () => {
      setLikes(likes + 1);
    }
    const dislike = () => {
        setLikes(likes - 1);
  }
  return (
    <div className="App">
      <h1>Cantidad de likes: {likes}</h1>
      <button onClick={like}> Aumentar </button>
      <button onClick={dislike}> Disminuir </button>
    </div>
  );
  }

 /* //Ejercicio 2
   function App() {
    const [nombre, setNombre] = useState('');
    return (
      <div>
        <h1>Su nombre es: {nombre}</h1>
        <input
        type = "text"
        value = {nombre}
        onChange = {(n) => setNombre(n.target.value)}/>
      </div>
    )
  }*/

// Ejercicio 3
/*
  const App = ()=> {
    const [modalOpen, setModalOpen] = useState(true);

    const modalContent = (
      <div className="modal-content">
        <div className="modal-body">Bienvenidos al curso de Multimedios</div>
        <div className="modal-footer">
          <button className="btn btn-close" onClick={()=> setModalOpen(false)}>Cerrar</button>
        </div>
      </div>
    )
    return (
      <div>
        <button className="btn btn-open" onClick={()=> setModalOpen(true)}>Abrir</button>
        <Modal 
        isOpen= {modalOpen}
        onRequestClose={()=> setModalOpen(false)}
        contentLabel='aaaa'>
        {modalContent}
        </Modal>
      </div>
    )
  }*/

// Ejercicio 4
/*
function App () {

  const [primerValor, setPrimerValor] = useState(0);
  const [segValor, setSegValor] = useState(0);
  const [resultado, setResultado] = useState(0);

  const suma = () => {
    setResultado(primerValor + segValor);
  }
  const resta = () => {
    setResultado(primerValor - segValor);
  }
  const reinicio = () => {
    setPrimerValor(0);
    setSegValor(0);
    setResultado(0);
  }

  return (
    <div>
      <Input 
      label = "Primer valor"
      valor = {primerValor}
      onChange = {(p) => setPrimerValor(p.target.value)}
      />
      <Input
        label="Segundo valor"
        valor={segValor}
        onChange={(s) => setSegValor(s.target.value)}
      />
      <Resultado resultado = {resultado} />
      <button onClick={suma}>Suma</button>
      <button onClick={resta}>Resta</button>
      <button onClick={reinicio}>Reiniciar</button>
    </div>
  )
}
  function Input ({label, valor, onChange}){
    return (
      <div>
        <label>{label}</label>
        <input type = "numero" value = {valor} onChange={onChange} />
      </div>
    )
  }

  function Resultado({resultado}){
    return (
      <div>
        Resultado: {resultado}
      </div>
    )
}*/

export default App;
