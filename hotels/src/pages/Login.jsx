import { useState } from 'react'
import ButtonMui from '../components/ButtonMui.jsx';
import InputMui from '../components/InputMui.jsx';
import LoginService from '../utils/login.js';

import PersonIcon from '@mui/icons-material/Person';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

import IconButton from '@mui/material/IconButton';

import { useNavigate } from 'react-router-dom';



function LoginPage() {

  const navigate = useNavigate();
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handlesendForm = () => {
    const resLogin = LoginService(user, password);
    console.log(resLogin);
    if (resLogin) {
      alert(`Bienvenido ${resLogin.name} ${resLogin.lastname}`);
    } else {
      navigate('/dashboard');
    }
  };

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
          value={User} 
          onChange={(e) => setUser(e.target.value)} 
          helperText="El mismo que el correo electronico"
          label ="Usuario"

        />
  
        <InputMui
          endIcon={<IconButton onClick={() => { setShowPassword(!showPassword); }} > 
          {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}</IconButton>}
          placeholder="Password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
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

export default LoginPage;
