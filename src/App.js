import './App.css';
import { MiBoton } from './PrimerStyledComponent';
import { MiBotonLargo } from './segundoStyledComponentHerencia';
import { MiBotonLargoHeredado } from './TercerStyledComponentHerenciaCompleta';

function App() {
  return (
    <div className="App">
      <MiBoton entrar={true}>1er props en primer styled</MiBoton>
      <MiBoton entrar={false}>2do props en primer styled</MiBoton>
      <MiBotonLargo>II Btn props heredados solo para cambiar este boton</MiBotonLargo>
      <MiBotonLargoHeredado entrar={true}>Para heredar todo true</MiBotonLargoHeredado>
      <MiBotonLargoHeredado entrar={false}>Para heredar todo false</MiBotonLargoHeredado>
    </div>
  );
}

export default App;
