
import { useNavigate } from 'react-router-dom';
const LandingPage = () => {

  const navigate = useNavigate();

  const goToQuizPage = () => {
    navigate('/quiz'); // Navigate to the Quiz page
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
      <h1>You have landed</h1>
      <p>Welcome Potential Hackers</p>
      <button onClick={goToQuizPage}>Go to Quiz Page</button>
    </div>
  );
};

export default LandingPage;

