import { useState } from 'react'
import './App.css'
import ButtonMui from './components/ButtonMui.jsx';
import InputMui from './components/InputMui.jsx';

import PersonIcon from '@mui/icons-material/Person';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

import IconButton from '@mui/material/IconButton';

function App() {
  const [asignature, setAsignature] = useState("");
  const [credit, setCredit] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleCount = () => {
    alert(`Materia: ${asignature} - Créditos: ${credit}`);
  };

  return (
    <>
      <h1>Vite + React</h1>

      <form onSubmit={(e) => { 
        e.preventDefault();
        handleCount();
      }}>
        
        <InputMui 
          startIcon={<PersonIcon />}
          placeholder="User" 
          value={asignature} 
          onChange={(e) => setAsignature(e.target.value)} 
          helperText="El mismo que el correo electronico"
          label ="Usuario"

        />
  
        <InputMui
          endIcon={<IconButton onClick={() => { setShowPassword(!showPassword); }} > 
          {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}</IconButton>}
          placeholder="Password" 
          value={credit} 
          onChange={(e) => setCredit(e.target.value)} 
          helperText="La contraseña esta en su correo"
          errorc={true}
          label ="Contraseña"
          type={showPassword ? "text" : "password"}
        />

        <ButtonMui 
          name="Ingresar" 
          backgroundColor="red"
          onClick={handleCount}
        />
      </form>
    </>
  )
}

export default App

