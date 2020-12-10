import React, {useState} from 'react'
import { Form, Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import AuthService from '../services/auth.services';
import imageLogo from '../images/logo.png';
import '../custom.css';

const Login = () => {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const onChangeEmail = (e) => {
    const email = e.target.value;
    setEmail(email)
    const defaultEmail = 'admin@intotu.com';
    if ( email !== defaultEmail){
      setMessage('salah email')
    } else if( email === ''){
      setMessage('harus input email')
    }
  }

  const onChangePassword = (e) => {
    const password = e.target.value;
    setPassword(password)
    const defaultPassword = 'password';
    if ( password !== defaultPassword){
      setMessage('salah password')
    } else if( password === ''){
      setMessage('harus input password')
    }
  }

  const handleLogin = (e) => {
    e.preventDefault();

    AuthService.login(email, password).then(
      () => {
        history.push("/admin/dashboard");
        window.location.reload();
      },
      (error) => {
        const resMessage = (error.response && error.response.data && error.response.data.message || error.message || error.toString())
      }
    )
  }

  return (
    <div className="background-login">
      <Form className="login-box" 
        onSubmit={handleLogin} 
      >
        <img src={imageLogo}/>
        <Form.Group>
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Email" name="email" value={email} onChange={onChangeEmail}/>
        </Form.Group>
        <Form.Group>
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" name="password" value={password} onChange={onChangePassword}/>
        </Form.Group>
        <Button type="submit" className="login-button" block>Masuk</Button>
        <p className="text-forgot">Lupa password ?</p>
        {message && ( <p className=" text-error text-center">{message}</p>)}
      </Form>
     
    </div>
  )
}

export default Login
