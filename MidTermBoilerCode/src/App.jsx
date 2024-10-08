import { useNavigate } from 'react-router-dom';

const App = () => {
  const navigate = useNavigate();

  const goToLoginPage = () => {
    navigate('/login'); // Navigate to the Login page
  };

  const mainDiv = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    width: '100vw',
    linearGradient: 'to right, #f12711, #f5af19',
  }

  return (
    <div style={mainDiv}>
      <h1>Home Page</h1>
      <p>Welcome to the homepage!</p>
      <button onClick={goToLoginPage}>Go to Login Page</button>
    </div>
  );
};

export default App;
