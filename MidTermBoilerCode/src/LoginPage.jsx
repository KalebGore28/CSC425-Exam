
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const LoginPage = () => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const goToLoginPage = () => {

    navigate('/landing'); // Navigate to the Login page
  };

  // Styling
  const textBoxStyles = {
    width: '200px',
    height: '30px',
    marginBottom: '10px',
  }

  const mainDiv = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    width: '100vw',
    linearGradient: 'to right, #f12711, #f5af19',
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if (userName === 'jimmy@example.com' && password === 'password') {
      goToLoginPage();
    } else {
      alert('Invalid Username or Password');
    }
  }

  return (
    <div style={mainDiv}>
      <h1>Login Here</h1>
      <p>This is the Login Page.</p>
      <form onSubmit={handleSubmit}>
        <p>Username</p>
        <input type="text"
          placeholder='Username'
          style={textBoxStyles}
          onChange={(e) => setUserName(e.target.value)}
        />
        <p>Password</p>
        <input type="text"
          placeholder='Password'
          style={textBoxStyles}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <button type="submit">Login</button>

      </form>
    </div>
  );
};

export default LoginPage;
